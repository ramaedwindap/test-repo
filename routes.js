// const { request } = require("http");

// const routes = ([
//     {
//         method : 'GET',
//         path : '/',
//         handler : (request, h) => {
//             return `Hello World!`
//         }
//     },
//     {
//         method : 'GET',
//         path : '/about/{username?}',
//         handler : (request, h) => {
//             const {username = 'Strangers!'} = request.params;
//             const {lang} = request.query;

//             if(lang === 'id'){
//                 return `Halaman About, Halooo ${username}`
//             }
//             return `About Page, Hi ${username}`
//         }
//     },
//     {
//         method : 'POST',
//         path : '/login',
//         handler : (request, h) => {
//             const {username} = request.playload;
//             return `Welcome ${username}!`
//         }
//     },
//     {
//         method : '*',
//         path : '/about',
//         handler : (request, h) => {
//             return `Halaman tidak dapat diakses dengan method tersebut`
//         }
//     },
//     {
//         method : '*',
//         path : '/',
//         handler : (request, h) => {
//             return `Halaman tidak dapat diakses dengan method tersebut`
//         }
//     },
//     {
//         method : '*',
//         path : '/{any*}',
//         handler : (request, h) => {
//             return `Halaman tidak ditemukan`
//         }
//     }
// ])

// module.exports = routes;




const routes = ([
    {
        method : 'GET',
        path : '/',
        handler : (request, h) => {
            return `Hello World!`
        }
    },
    {
        method : '*',
        path : '/',
        handler : (request, h) => {
            return `Tidak dapat melakukan proses method tersebut pada laman`
        }
    },
    {
        method : 'GET',
        path : '/about',
        handler : (request, h) => {
            const {lang} = request.query;
            
            if(lang === 'id'){
                return `Tentang Saya!`
            }
            return `About me!`
        }
    },
    {
        method : '*',
        path : '/about',
        handler : (request, h) => {
            return `Tidak dapat melakukan proses method pada laman tersebut`
        }
    },
    {
        method : '*',
        path : '/{any*}',
        handler : (request, h) => {
            return `page not found`
        }
    },
    {
        method : 'GET',
        path : '/user/{username?}',
        handler : (request, h) => {
            const {username = 'Strangers!'} = request.params;
            return `Hallo ${username}`
        }
    },
    {
        method : 'POST',
        path : '/login',
        handler : (request, h) => {
            const {username, password} = request.payload;
            return `Hallo ${username}`
        }
    }
])

module.exports = routes;