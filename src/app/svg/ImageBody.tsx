const ImageBody = () => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='120'
        height='120'
        viewBox='0 0 120 120'
        fill='none'
      >
        <g filter='url(#filter0_d_59_554)'>
          <circle cx='59' cy='55' r='50' fill='#035EAE' />
        </g>
        <defs>
          <filter
            id='filter0_d_59_554'
            x='0'
            y='0'
            width='120'
            height='120'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dx='1' dy='5' />
            <feGaussianBlur stdDeviation='5' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.220955 0 0 0 0 0.421471 0 0 0 0 0.595833 0 0 0 0.15 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_59_554'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_59_554'
              result='shape'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
export default ImageBody