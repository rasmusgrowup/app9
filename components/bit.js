<div className={css.planeWrapper} ref={planeRef}>
  <AnimatedImage />
</div>

<div className={css.videoWrapper} ref={planeRef}>
  <video
    autoPlay
    muted
    loop
    playsInline
    width='100%'
    height='100%'
    alt='Growup Studio showreel'
    style={{ objectFit: 'cover' }}
    >
    <source src={'/OrganicBar.mp4'} type='video/mp4' />
  </video>
</div>
