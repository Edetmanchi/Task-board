export default defineNuxtRouteMiddleware((to, from, next)=> {
    const auth = useCookie('user')
  
      if(!auth.value){
        return navigateTo('/auth/signin')
      }
    
  })