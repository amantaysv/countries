import ContentLoader from 'react-content-loader'
import s from './Card.module.scss'

export const CardSkeleton = () => {
  return (
    <div className={s.card}>
      <ContentLoader
        viewBox='0 0 328 370'
        speed={2}
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='0' y='0' width='100%' height={195} />
        <rect x='20' y='220' width='calc(100% - 40px)' height='18.5' rx={5} ry={5} />
        <rect x='20' y={220 + 18.5 + 16} width='calc(100% - 40px)' height='16' rx={5} ry={5} />
        <rect
          x='20'
          y={220 + 18.5 + 16 + 16 + 8}
          width='calc(100% - 40px)'
          height='16'
          rx={3}
          ry={3}
        />
        <rect
          x='20'
          y={220 + 18.5 + 16 + 16 + 8 + 16 + 8}
          width='calc(100% - 40px)'
          height='16'
          rx={3}
          ry={3}
          className='rect'
        />
      </ContentLoader>
    </div>
  )
}
