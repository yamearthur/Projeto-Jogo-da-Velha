var rodada = 1;
var matriz_jogo = Array(3 );

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1]=0;
matriz_jogo['a'][2]=0;
matriz_jogo['a'][3]=0;

matriz_jogo['b'][1]=0;
matriz_jogo['b'][2]=0;
matriz_jogo['b'][3]=0;

matriz_jogo['c'][1]=0;
matriz_jogo['c'][2]=0;
matriz_jogo['c'][3]=0;

$(document).ready(function(){


    $('#btn_iniciar').click(function(){

        if($('#apelido-jogador1').val()==''){
            alert('O apelido do jogador 1 não foi preenchido.');
            return false;
        };
        if($('#apelido-jogador2').val()==''){
            alert('O apelido do jogador 2 não foi preenchido.');
            return false;
        };


        $('#nome-jogador1').html($('#apelido-jogador1').val());
        $('#nome-jogador2').html($('#apelido-jogador2').val());



        $('#pagina_inicial').hide();
        $('#palco_jogo').show();


    });

    $('.jogada').click(function(){

        var id_campo_clicado = this.id;
        jogada(id_campo_clicado);
    });

    function jogada(id){
        var icone = '';
        var ponto = 0;

        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
           ponto = -1
        } else{
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1
        }

        $('#'+id).css('background-image', icone);
    
        rodada++;

        var linha_coluna = id.split('-');

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

        verifica_combinacao();
    }

    function verifica_combinacao(){
        var pontos = 0
        for(var i = 1; i<=3; i++){
            pontos = pontos+ matriz_jogo['a'][i]
        }
        ganhador(pontos);
        pontos=0;
    
        for(var i = 1; i<=3; i++){
            pontos = pontos+ matriz_jogo['b'][i]
        }
        ganhador(pontos);
        pontos=0;

        for(var i = 1; i<=3; i++){
            pontos = pontos+ matriz_jogo['c'][i]
        }
        ganhador(pontos);
        pontos=0;
        
        for(var l = 1; l<=3; l++){
            pontos=0;

            pontos+= matriz_jogo['a'][l];
            pontos+= matriz_jogo['b'][l];
            pontos+= matriz_jogo['c'][l];    
            ganhador(pontos);
        }

        pontos=0;
        pontos=matriz_jogo['a'][1]+matriz_jogo['b'][2]+matriz_jogo['c'][3];
        ganhador(pontos);

        pontos=0;
        pontos=matriz_jogo['a'][3]+matriz_jogo['b'][2]+matriz_jogo['c'][1];
        ganhador(pontos);

    }
    function ganhador(pontos){
        if(pontos==-3){
            var jogada1 = $('#apelido-jogador1').val();
            alert('vitoria do '+ jogada1);
            $('.jogada').off();
        }else if(pontos ==3){
            var jogada2 = $('#apelido-jogador2').val();
            alert('vitoria de '+ jogada2);
            $('.jogada').off();
        }

    }


});