export const isLogin = () =>{
    if(document.cookie = 'usernam=admin') return true
    return false
}