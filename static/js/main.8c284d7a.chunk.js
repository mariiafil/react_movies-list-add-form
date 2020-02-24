(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},14:function(e,t,a){e.exports=a(23)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(10),l=a.n(i),m=(a(19),a(12)),s=a(4),o=a(5),c=a(7),d=a(6),u=a(8),h=(a(20),a(21),a(22),function(e){var t=e.title,a=e.description,r=e.imgUrl,i=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:i},"IMDB"))))});h.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var b=a(2),g=a(1),f=a(13),v=a(3),E=a.n(v),w=function(e){var t=e.formErrors,a=Object(f.a)(e,["formErrors"]),r=!0;return Object.values(t).forEach((function(e){e.length>0&&(r=!1)})),Object.values(a).forEach((function(e){""===e&&(r=!1)})),r},M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",formErrors:{title:"",imgUrl:"",imdbId:"",imdbUrl:"",isEmpty:!1}},a.handleInput=function(e){var t=e.target,r=t.name,n=t.value;a.setState(Object(g.a)({},r,n))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,r=t.title,n=t.description,i=t.imgUrl,l=t.imdbUrl,m=t.imdbId;w(a.state)?(a.props.addMovie({title:r,description:n,imgUrl:i,imdbUrl:l,imdbId:m}),a.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})):a.setState((function(e){return{formErrors:Object(b.a)({},e.formErrors,{isEmpty:!0})}}))},a.handleFocus=function(e){var t=e.target.name,r=a.state.formErrors;a.setState((function(e){return{formErrors:Object(b.a)({},e.formErrors,{isEmpty:!1})}})),r[t].length>0&&a.setState((function(e){return{formErrors:Object(b.a)({},e.formErrors,Object(g.a)({},t,""))}}))},a.handleBlur=function(e){var t=e.target,r=t.value,n=t.name;"title"!==n&&"imdbUrl"!==n&&"imdbId"!==n||r.length<3&&a.setState((function(e){return{formErrors:Object(b.a)({},e.formErrors,Object(g.a)({},n,"minimum 3 characaters required"))}})),"imgUrl"===n&&(r.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/)||a.setState((function(e){return{formErrors:Object(b.a)({},e.formErrors,Object(g.a)({},n,"not valid URL"))}})))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,r=e.imgUrl,i=e.imdbUrl,l=e.imdbId,m=e.formErrors,s=E()({input:!0,error:m.title}),o=E()({input:!0,error:m.imdbId}),c=E()({input:!0,error:m.imdbUrl}),d=E()({input:!0,error:m.imgUrl});return n.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},m.isEmpty&&n.a.createElement("span",{className:"error__text"},"Some required fields are not valid"),n.a.createElement("label",null,"Title:",n.a.createElement("input",{className:s,type:"text",name:"title",value:t,onChange:this.handleInput,onBlur:this.handleBlur,onFocus:this.handleFocus}),m.title.length>0&&n.a.createElement("span",{className:"error__text"},m.title)),n.a.createElement("label",null,"Description:",n.a.createElement("input",{className:"input",type:"text",name:"description",value:a,onChange:this.handleInput})),n.a.createElement("label",null,"Image URL:",n.a.createElement("input",{className:d,type:"text",name:"imgUrl",value:r,onChange:this.handleInput,onBlur:this.handleBlur,onFocus:this.handleFocus}),m.imgUrl.length>0&&n.a.createElement("span",{className:"error__text"},m.imgUrl)),n.a.createElement("label",null,"Imdb URL:",n.a.createElement("input",{className:c,type:"text",name:"imdbUrl",value:i,onChange:this.handleInput,onBlur:this.handleBlur,onFocus:this.handleFocus}),m.imdbUrl.length>0&&n.a.createElement("span",{className:"error__text"},m.imdbUrl)),n.a.createElement("label",null,"Imdb Id:",n.a.createElement("input",{className:o,type:"text",name:"imdbId",value:l,onChange:this.handleInput,onBlur:this.handleBlur,onFocus:this.handleFocus}),m.imdbId.length>0&&n.a.createElement("span",{className:"error__text"},m.imdbId)),n.a.createElement("button",{className:"button",type:"submit"},"Add Movie"))}}]),t}(r.Component),j=a(11),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={movies:j},a.addMovie=function(e){a.setState((function(t){return{movies:[].concat(Object(m.a)(t.movies),[e])}}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(M,{addMovie:this.addMovie})))}}]),t}(r.Component);l.a.render(n.a.createElement(U,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8c284d7a.chunk.js.map