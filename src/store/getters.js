const getters = {
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  select_navbar: state => state.permission.navBarSelect,
  token: state => state.user.token,
  lawsuitData: state => {
    let data = []
    state.lawsuit.lawsuitData.filter((currentValue, index, arr) => {
      if (currentValue.businessType === 'lawsuit') {
        data.push(currentValue)
      }
    })
    return data
  },
  perennialData: state => {
    let data = []
    state.lawsuit.lawsuitData.filter((e, i, arr) => {
      if (e.businessType === 'perennial') {
        data.push(e)
      }
    })
    return data
  },
  specialData: state => {
    let data = []
    state.lawsuit.lawsuitData.filter((e, i, arr) => {
      if (e.businessType === 'special') {
        data.push(e)
      }
    })
    return data
  }
}
export default getters
