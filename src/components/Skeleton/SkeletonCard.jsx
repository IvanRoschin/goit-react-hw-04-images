import Skeleton from 'react-loading-skeleton';
import { SkeletonItem, SkeletonGallery } from './SkeletonCard.stylized';

export default function SkeletonCard({ cards }) {
  return (
    <SkeletonGallery>
      {cards.map((_, i) => (
        <SkeletonItem key={i}>
          <Skeleton />
        </SkeletonItem>
      ))}
    </SkeletonGallery>
  );
}

//   const SkeletonCard = ({ cards }) => {
//   return Array(cards)
//     .fill(0)
//     .map((_, i) => (
//       <SkeletonItem key={i}>
//         <Skeleton />
//       </SkeletonItem>
//     ));
// };
//   return (
//     <SkeletonGallery>
//       SkeletonCard
//     </SkeletonGallery>
//   )
// }

// const SkeletonCard = ({ cards }) => {
//   return Array(cards)
//     .fill(0)
//     .map((_, i) => (
//       <SkeletonItem key={i}>
//         <Skeleton />
//       </SkeletonItem>
//     ));
// };

// export default SkeletonCard;
