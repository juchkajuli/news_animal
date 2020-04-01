
Vue.component('header-component' , {
    data: function () {
        return {
            title: "Named"
        };
    },
    template: '<div class="header__cont"><div class="header"><img src="img/cat.svg" alt="Логотип" class="logo"><span class="name-logo">Photobook</span><input class="search" type="text" autocapitalize="none" autocapitalize="none" placeholder="Поиск" value=""><nav class="menu-list"><a href="#" class="menu-icon"><img src="img/домикк.svg" alt="home" class="img-menu-head"><a href="#" class="menu-icon"><img src="img/письмо.svg" alt="message" class="img-menu-head"></a><a href="#" class="menu-icon"><img src="img/сердце.svg" alt="interes" class="img-menu-head"></a><a href="#" class="menu-icon"><img src="img/avatar1.svg" alt="avatar" class="img-menu-head"></a></nav></div></div>'
});
new Vue ({ el: '#header-demo'});

Vue.component('content-component', {
    data: function() {
        return {
            title: " "
        };
    },
    template:'<div class="head-public"><div class="head_p"> <a href="#" class="user-link"> <img src="img/avatar1.svg" alt="Аватар" class="user-avatar"></a><div class="signature"> <span class="log-signa">Имя пользователя</span></div></div><div class="public-button"><button class="public-button-circle" type="button"><img src="img/меню-точки.svg"></button></div></div>'
});
new Vue ({ el:'#content_head' });
new Vue ({el:'#content_head_'});
new Vue ({el:'#content_head_1'});

Vue.component('comment-component', {
    data: function() {
        return {
            title: ''
        };
    },
    template:'<div class="comment"> <div class="like"><img src="img/like.svg" class="like-img" ><img src="img/коммент.svg" class="comment-img"></div><div class="user-signa"><span class="signa-log"> Имя пользователя  </span><span class="signa"> Подпись к публикации </span></div><div class="comment-user"><span class="signa-log"> Имя пользователя </span><span class="signa"> Комментарий </span><p class="signat"><span class="signa-log"> Имя пользователя </span><span class="signa"> Комментарий </span></p><p class="signat"><span class="signa-log"> Имя пользователя </span><span class="signa"> Комментарий </span></p></div> </div><div class="comment-box"><span class="add-comment"> Добавьте комментарий... </span><div class="button-public-comm"><button  class="button-public-comment" type="button">Опубликовать</button></div></div></div>'
});

new Vue ({ el:'#comment_block'});
new Vue ({ el:'#comment_block_'});
new Vue ({ el:'#comment_block_1'});

Vue.component('friends_link', {
    data: function() {
        return {
            title: ''
        };
    },
    template:'<div class="friends-link"> <a href="#" class="user-link"> <img src="img/avatar1.svg" alt="Аватар" class="user-avatar"></a><a href="#" class="name-friends"> Имя пользователя </a></div>'
});

new Vue ({ el:'#name___user'});

Vue.component('recom__link', {
    data: function() {
        return {
              title: ''
        };
    },
         template: '<div class="recommend-link"><a href="#" class="user-link"> <img src="img/avatar1.svg" alt="Аватар" class="user-avatar"></a><a href="#" class="name-recommend"> Имя пользователя </a></div>'
});

Vue.component('button___link', {
    data: function() {
        return{
            title:''
        };
    },
    template:'<div class="button-recommend"><button class="recommend-button" type="button">Подписаться</button></div>'
}); 
new Vue ({ el: '#recom_component'});

Vue.component('mainContent', {
    data: function() {
        return{
            title: ''
        };
    },
    template:''
});

