const actual = new Date().getFullYear()

export const skills = [
    {
        skill: 'HTML',
        percentage: 90
    },
    {
        skill: 'CSS',
        percentage: 80
    },
    {
        skill: 'SCSS/SASS',
        percentage: 30
    },
    {
        skill: 'JAVASCRIPT',
        percentage: 70
    },
    {
        skill: 'TYPESCRIPT',
        percentage: 70
    },
    {
        skill: 'REACT',
        percentage: 90
    },
    {
        skill: 'REACT NATIVE',
        percentage: 40
    },
    {
        skill: 'NODE JS',
        percentage: 30
    },
    {
        skill: 'C',
        percentage: 95
    },
    {
        skill: 'C++',
        percentage: 60
    },
    {
        skill: 'FIREBASE',
        percentage: 69
    },
    {
        skill: 'AWS',
        percentage: 10
    },
    {
        skill: 'PYTHON',
        percentage: 40
    },
]

export const  experiences = [
    {
        title: 'Escuela de educacion tecnica N°9',
        description:'Estudio secundario tecnico enfocado a electronica',
        from:'2009',
        to:'2016'
    },
    {
        title: 'Universidad tecnologica Nacional',
        description: 'Estudio de la carrera Ingenieria en electronica',
        from: '2017',
        to: actual
    },
    {
        title: 'Trabajo de manera independiente',
        description: 'Reparacion de computadoras y diseño de paginas web ',
        from: '2019',
        to: actual
    },
]

export const proyects = [
    {
        name: 'Trivia app',
        description: 'Es una app de trivias escrita en typescript con react,redux ,Login, Register utilizando la API de firebase(como base de datos y Login) ,desplegada en github con un dominio personalizado y se utiliza boostrap y CSS/SCSS personalizado para la UI',
        img: 'Trivia_app.png',
        link: 'https://testdeploy.xyz/'
    },    
    {
        name: 'Poke API',
        description: 'Es una pagina web bastante simple donde se usa login con firebase ,boostrap y una API de Pokemons',
        img: 'pokeAPI.png',
        link: '#'
    },
    {
        name: 'Portafolio',
        description: 'Este portafolio lo desarrolle utilizando Next con react y node js, para el apartado visual utilice boostrap y CSS personalizado',
        img: 'portafolioFoto.png',
        link: '#'
    },
]