const getters = {
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  select_navbar: state => state.permission.navBarSelect
}
export default getters
