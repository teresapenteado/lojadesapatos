document.querySelector('nav>button').addEventListener(
    //Evento a ser tratado (click)
    'click',
    //funcao que executa quando o bt é executado

    function() {
        // capiturando a ul do menu
        let ul = document.querySelector('nav>ul');

        // alterando a altura da ul
        ul.style.height = "400px"

    }
)