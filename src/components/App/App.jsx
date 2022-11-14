import { useState, useEffect } from 'react';
import { fetchImages } from 'Api/Api';
import Message from 'components/Message';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMoreButton from 'components/Button/';
import ImagesSkeleton from 'components/Skeleton';
import { Box } from 'components/Box/Box';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const App = () => {
  const [images, setImages] = useState([]);
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [notify, setNotify] = useState('');
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!request) {
      setNotify('To display pictures, enter a query in the search field');
      return;
    }

    async function getImages() {
      setStatus(Status.PENDING);
      setNotify`Sorry, but where are no images for your request ${request}`;

      try {
        const images = await fetchImages(request, page);
        setNotify(`Here is your ${request}s`);
        setImages(prevState => [...prevState, ...images.hits]);
        setTotal(images.total);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }
    getImages();
  }, [request, page]);

  const handleFormSubmit = request => {
    setRequest(request);
    setImages([]);
    setPage(1);
    setTotal(0);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Box>
      <Searchbar onSubmit={handleFormSubmit} />
      <Message message={notify} status={status} />
      <ImageGallery images={images} />
      {status === Status.PENDING && <ImagesSkeleton />}
      {status === Status.RESOLVED && images.length < total && (
        <LoadMoreButton onClick={loadMore} />
      )}
    </Box>
  );
};

export default App;
