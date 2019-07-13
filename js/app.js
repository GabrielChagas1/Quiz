//colando para rodar o áudio por trás do site (Abertura de Stranger Things)
document.getElementById('video').play();

$(document).ready(function(){

    //variável para guardar os acertos
    var acertos = 0;

    //list improvisando as perguntas
    var perguntas = [
        {Codigo: 1, Pergunta: 'Qual o nome dá cidade fictícia onde se passa a série?', Respostas: 'Derry Hawkins Mystic Falls', RespostaCorreta: 'Hawkins'},
        {Codigo: 2, Pergunta: 'Em que ano acontece a primeira temporada da série?', Respostas: '1981 1988 1983', RespostaCorreta: '1983'},
        {Codigo: 3, Pergunta: 'Qual é o nome do bicho que Dustin adota?', Respostas: 'Dart Kark Dark', RespostaCorreta: 'Dart'},
    ];

    //Exibindo as perguntas para o usuário
    $('#quiz').click(function(){
        $('#modal-perguntas').modal('show');
        ZerarJogo();
    });

    function ZerarJogo(){
        MontarProximaPergunta(0);
        acertos = 0;
    }

    //Validando as resposta
    $('.resposta li').click(function(){
        pergunta = $(this).attr('pergunta');
        resposta = $(this).text();
        perguntas.forEach(VerificarPerguntas);

        if(pergunta == perguntas.length){
            if(acertos != 0){
                $('#modal-perguntas').modal('hide');
                $('#modal-final').modal("show");
                $('.placar').text(acertos+"/"+perguntas.length);
            }
            if(acertos == 0){
                $('#modal-perguntas').modal('hide');
                $('#modal-zero').modal("show");
                $('.placar').text(acertos+"/"+perguntas.length);
            }
        }

    });

    //Função para verificar as resposta das perguntas
    function VerificarPerguntas(element, index, array){
        if(element.Codigo == pergunta){
            if(element.RespostaCorreta == resposta){
                acertos = acertos + 1;
            }
        }
        MontarProximaPergunta(pergunta);
    }

    function MontarProximaPergunta(perguntaAtual){
        proxima = parseInt(perguntaAtual) + 1;
        perguntas.forEach(teste);     

    }

    function teste(element, index, array){
        if(element.Codigo == proxima){
            $('h5').text(element.Pergunta);
            $('.imagem').attr('src', 'images/img-'+proxima+'.jpg');
            var alternativas = element.Respostas.split(" ");
            $('.resposta li').each(function(index){
                $(this).text(alternativas[index]);
                $(this).attr('pergunta', proxima);
            });
        }
    }  
});