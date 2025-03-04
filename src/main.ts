import('@module-federation/enhanced/runtime')
  .then(({ init }) => {
    init({
      name: 'onecx-shell-ui',
      remotes: []
    })
  })
  .then(() => import('./bootstrap').catch((err) => console.error(err)))
