module.exports = {
    //configurações do babel
    presets: [
        "@babel/preset-env", //responsavel por alterar as funcionalidades do javascript para que o navegador entenda
        "@babel/preset-react" //transformar componentes que o navegador não entende do react
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
    
};

//padraõ em todo proj.