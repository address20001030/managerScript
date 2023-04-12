import { rest } from "./rest";

export const apiAccount = {
  login: (username, password) => rest.post(
    "/auth/login",
    {username, password}
  ),
  getInfo: 
    () => rest.post("/user", {}, null, true),
  getAll:
    () =>rest.get("/script-u/get-all",{},null,true),
  register: (username, password,auth) => rest.post("/auth/register",{username,password,auth}, null, true),
  deleteScr:(username) =>rest.post("/script-u/delete/"+username,{},null,true),
  addScript:(username,host,batCode,pythonEncode,pythonCall)=> rest.post("/script-u/add",{username,host,batCode,pythonEncode,pythonCall},null,true),
  updateScript:(username,host,batCode,pythonEncode,pythonCall)=>rest.post("/script-u/update",{username,host,batCode,pythonEncode,pythonCall},null,true),

};