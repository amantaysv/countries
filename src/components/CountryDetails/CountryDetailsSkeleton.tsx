import SkeletonContentLoader from 'react-content-loader'
import s from './CountryDetails.module.scss'

const headingHeight = 37
const headingMargin = 32
const liHeight = 22
const liMargin = 16
const borderCountriesMargin = 64
const borderCountriesTitleHeight = liHeight
const borderCountriesButtonHeight = 34

const borderRadius = {
  rx: 5,
  ry: 5,
}

export const CountryDetailsSkeleton = () => {
  return (
    <div className={s.countryDetails}>
      <SkeletonContentLoader
        viewBox='0 0 2 1'
        speed={2}
        backgroundColor='#fff'
        foregroundColor='#ecebeb'
      >
        <rect x='0' y='0' width='100%' height='100%' />
      </SkeletonContentLoader>
      <SkeletonContentLoader
        viewBox='0 0 656 280'
        speed={2}
        backgroundColor='orange'
        foregroundColor='red'
      >
        <rect x='0' y='0' width='35%' height={headingHeight} {...borderRadius} />
        <rect
          x='0'
          y={headingHeight + headingMargin}
          width='40%'
          height={liHeight}
          {...borderRadius}
        />
        <rect
          x='50%'
          y={headingHeight + headingMargin}
          width='40%'
          height={liHeight}
          {...borderRadius}
        />
        <rect
          x='0'
          y={headingHeight + headingMargin + liHeight + liMargin}
          width='40%'
          height={liHeight}
          {...borderRadius}
        />
        <rect
          x='50%'
          y={headingHeight + headingMargin + liHeight + liMargin}
          width='40%'
          height={liHeight}
          {...borderRadius}
        />
        <rect
          x='0'
          y={headingHeight + headingMargin + (liHeight + liMargin) * 2}
          width='40%'
          height={liHeight}
          {...borderRadius}
        />
        <rect
          x='50%'
          y={headingHeight + headingMargin + (liHeight + liMargin) * 2}
          width='40%'
          height={liHeight}
          {...borderRadius}
        />
        <rect
          x='0'
          y={headingHeight + headingMargin + (liHeight + liMargin) * 3}
          width='40%'
          height={liHeight}
          {...borderRadius}
        />
        <rect
          x='50%'
          y={headingHeight + headingMargin + (liHeight + liMargin) * 3}
          width='40%'
          height={liHeight}
          {...borderRadius}
        />

        <rect
          x='0'
          y={headingHeight + headingMargin + (liHeight + liMargin) * 3 + borderCountriesMargin + 6}
          width={140}
          height={borderCountriesTitleHeight}
          {...borderRadius}
        />

        <rect
          x={140 + 16}
          y={headingHeight + headingMargin + (liHeight + liMargin) * 3 + borderCountriesMargin}
          width='140'
          height={borderCountriesButtonHeight}
          {...borderRadius}
        />
        <rect
          x={140 + 16 + 140 + 8}
          y={headingHeight + headingMargin + (liHeight + liMargin) * 3 + borderCountriesMargin}
          width='140'
          height={borderCountriesButtonHeight}
          {...borderRadius}
        />
        <rect
          x={140 + 16 + (140 + 8) * 2}
          y={headingHeight + headingMargin + (liHeight + liMargin) * 3 + borderCountriesMargin}
          width='140'
          height={borderCountriesButtonHeight}
          {...borderRadius}
        />
      </SkeletonContentLoader>
    </div>
  )
}
