function enviarScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('#main div._13NKt');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("#main span[data-testid=send]").click();                   

        }
        i++;
    }, 250)
}

enviarScript(`
Narrador Feminino: Há muito tempo e muito longe, em uma vila no alto de uma montanha, algo incrível estava ocorrendo. No mesmo momento, duas meninas idênticas nasceram! Um, uma princesa bebê. O rei e a rainha ficaram muito felizes. A princesa Anneliese teria apenas o melhor. A segunda menina se chamava Erika. Seus pais a amavam tanto quanto o rei e a rainha amavam a princesa, mas eles se preocupavam. Eles eram tão pobres. Como eles seriam capazes de cuidar de sua filhinha? Muitos anos se passaram. A princesa aprendeu seus deveres reais, enquanto Erika trabalhou muito e duro como costureira para a rancorosa Madame Carp. Com vidas tão diferentes, não era de surpreender que a princesa e o mendigo nunca se encontrassem. Mas o destino decretou que sim. Tudo começou na mina real, onde os mineiros informaram à rainha que o ouro havia acabado. A rainha viúva ficou chocada. O reino estava agora falido. Como ela iria cuidar de seu povo? Se ao menos ela pudesse chamar seu conselheiro de confiança Preminger, mas ele estava longe em uma longa jornada. Ela precisava fazer algo rápido para salvar o reino, mas o quê? E então isso a atingiu.

--

Agendador: Hoo! Estamos atrasados, atrasados, atrasados! Temos vinte, no máximo, vinte e dois minutos, para sua prova real! E então é mover, mover, mover para o seu discurso na Sociedade Histórica! Depois disso temos que correr, e quero dizer, correr, para o Chá da Sociedade Hortícola! Ah, e depois há suas aulas de matemática, suas aulas de geografia, suas aulas de ciências...

Anneliese: Toda a minha vida eu sempre quis ter um dia só para mim. Nada para fazer e pela primeira vez em nenhum lugar eu preciso estar. Sem lições, lordes, ou almoços, ou lista de coisas a fazer no caminho. Ninguém para dizer quando comer ou ler ou sair ou ficar. Esse seria o dia...

Erika: Toda a minha vida eu sempre quis ter um dia para mim. Não acordar com uma pilha de trabalho em cada prateleira. Sem bainhas que precisam ser passadas e sem mangas desarrumadas. Nada de vestido de noiva com mil pontos para fazer crochê. E nenhuma dívida a pagar.

Bertie: (sobressalta-se) Madame Carpa!

Madame Carp: O que você acha que eu estou correndo aqui? Um cabaré?

Erika: Eu teria dito a prisão de um devedor.

Madame Carp: Continue rindo! Você vai trabalhar para mim por mais trinta e sete anos!

Erika: Mas já paguei mais da metade!

Madame Carp: Mas há interesse, não é? Seus pais deveriam ter pensado nisso antes de pegarem tanto emprestado.

Erika: Eles fizeram isso para me alimentar!

Madame Carp: Erro deles!

Erika: Como seria ser...

Anneliese: Como seria ser... Livre

Erika: Grátis

Anneliese: Livre para tentar coisas malucas.

Erika: Livre de infinitos IOUs.

Anneliese: Livre para voar

Erika: Livre para cantar

Anneliese: E casar com quem eu escolher...

Rainha Genevieve: Sinto muito, minha querida, mas como você sabe, é vital que você se case com o rei Dominick. É a única maneira de cuidar do nosso povo.

Anneliese: Eu sei, é meu dever.

Rainha Genevieve: Ah, e olhe! Mais um presente de noivado!

Anneliese: Você pensaria que sou tão sortuda por ter tantas coisas. Estou percebendo que todo presente vem com cordas.

Erika: Embora eu saiba que tenho tão pouco, minha determinação é forte. As pessoas vão se reunir ao redor do mundo para ouvir minha música.

Bertie: Posso ir junto?

Anneliese: Agora temo que nunca serei...

Erika: Em breve serei para sempre...

Anneliese&Erika: Grátis!

Anneliese: Fecho os olhos e sinto-me voar a mil milhas de distância...

Erika: Eu poderia voar, mas seria certo? Minha consciência me diz para ficar.

Anneliese: Eu permanecerei para sempre real.

Erika: Eu vou pagar a dívida dos meus pais.

Anneliese & Erika: O dever significa fazer as coisas que seu coração pode se arrepender.

Anneliese: Mas eu nunca vou parar de acreditar.

Erika: Ela nunca pode parar meus esquemas.

Anneliese & Erika: Há mais na vida do que luvas, vestidos, linhas e costuras. Nos meus sonhos, serei livre!

--

Nack: Ok, que idiota colocou isso aqui?

Nick: Ah, esse seria eu.

Nack: Vamos rever, vamos? Estamos roubando ouro! Esse é brilhante?

Nick: Não.

Nack: Valioso?

Nick: Não.

Nack: Vai fazer o chefe feliz?

Nick: Não.

Nack: Foco, Nick. Isso é o que você precisa. Isso e uma pausa. Shh!!!

Preminger: Por que, olá.

Nick: Mestre Preminger, você voltou... aqui... cedo. Espero que tenha feito uma boa viagem.

Midas: (Latidos)

Nack: Aqui está você, senhor. O último do ouro da Mina Real. Nada sobrou.

Nick: Sim, porque é todo seu!

Preminger: Sim, é, muito meu. Finalmente!

Preminger: Eu estive me curvando, estive raspando, estive deitado como um tapete. E por dez longos anos tive que pagar minhas dívidas.

Mas hoje estou fugindo, pois o último ouro foi escavado. Ele estava esperando lá, então como eu poderia recusar?

Estou voltando para casa como um herói que descobriu uma grande riqueza, e que melhor marido uma princesa poderia escolher?

Eu sou o pretendente que vai se adequar a ela, trazer o reino de volta à saúde, e eu usarei a coroa, pois como eu poderia recusar?

Levante cada copo e desperte cada aplauso! Louvado seja que o reinado de Preminger está aqui! Mestre encarregado de tudo o que vejo, Todos me saúdam!

E ao me casar com a princesa, recebo tudo o que desejo. Como um fosso, um casaco de arminho e vistas do palácio. Mesmo que ela me trate com frieza, é um sinal de fogo interior. Por dentro ela está pensando "Como posso recusar?"

Nack: Certo, exceto por este pequeno problema, chefe.

Preminger: Isso é Prince Boss para você!

Nack: Certo, e a rainha decidiu casá-la com o rei de Dulcenia na próxima semana.

Premier: O que?! Tomar uma decisão sem mim? Quem ela pensa que é?

Nick: Uh, a rainha?

Preminger: Seu simplório sorridente!

Nick: Bem, ela é a rainha! Ela tem uma coroa, um cetro, e está sentada em sua grande cadeira chique... e aqueles...

Premiê: Silêncio!

Premier: Não! Eu não vou deixar! O filho deste camponês não vai fugir porque algum real imprudente escolheu outro namorado! Ahh! É... um... revés temporário!

É uma perda momentânea. Mas convenientemente meu ego não machuca. E no momento que eu voltar, vou mostrar a eles quem manda. Você pode apostar seu ouro, não haverá "sim".

Sim, suponha que a garota desapareça. Então o rei diz "au revoir". Então eu a encontro, a trago de volta e dou a notícia. Então a rainha ficará tão grata que prometerá o herdeiro a moi.

E eu vou humildemente dizer a ela "Como posso recusar?"

Quando nossa cerimônia terminar, eu me levantarei e assumirei o trono. E aquela idiota da Anneliese pode beijar meus sapatos. Pois o reino e o castelo serão meus e só meus. Se a coroa deve caber, então como posso recusar?

Preminger (Nack e Nick): Então... preparem-se com as rosas e aguardem com o champanhe. Quando você tem um plano brilhante, você nunca perde. Sim antes que o capítulo termine. Serei tão grande quanto Carlos Magno.

É um trabalho ingrato... mas como posso recusar?

Como posso recusar?

Preminger: (risada maligna)

--

Midas: Aproveite agora, irmã, porque não será seu por muito mais tempo.

Serafina: Ah, por favor, tendo delírios de novo, Midas?

Midas: Vamos apenas dizer que o trono vai pertencer ao meu mestre, Preminger, e qualquer coisa que pertença a ele ergo e ipso facto, pertence a mim.

Midas: (Latidos)

Serafina: (Miau) Você perdeu um dente, Midas?

Midas: Meu dente? Não, não, não meu dente! Ah é melhor você torcer para ter 9 vidas, Serafina! Porque você vai precisar de todos eles!

--

Embaixador Bismark: Eu sou o embaixador Bismark, aqui a convite da rainha. Rei Dominick, você tem certeza disso?

Rei Dominick: Eu sou.

Anneliese: Entre! Juliano, timing perfeito. Classifiquei isso como pirita de ferro. Bonito, mas não considerado valioso. Comumente conhecido como "ouro dos tolos".

Julian: Muito bem, alteza.

Anneliese: Alteza? Por que a formalidade repentina? Sou só eu.

Julian: A rainha me mandou. Aparentemente, o embaixador chegou com um presente para você.

Anneliese: O embaixador? Ele já está aqui?

Rei Dominick: Em nome do Rei Dominick... apresento-lhe este presente de noivado.

Rainha Genevieve: Ah! Obrigado, embaixador! A princesa Anneliese ficará bastante satisfeita.

Embaixador Bismark: Posso perguntar, Excelência, se você marcou uma data para o casamento?

Rainha Genevieve: Uma semana a partir de hoje serve?

Premier: Ah! Semana que vem? Uma decisão muito sábia e ponderada, Vossa Majestade.

Embaixador Bismark: Excelente. Vou... er, mandar chamar o Rei Dominick, para que ele possa conhecer sua nova noiva.

Anneliese: Tão feliz. Livres para fazer o que quiserem. Como você acha que o Rei Dominick será?

Julian: Ah, tenho certeza que ele será... adequado.

Anneliese: Ah, eu sei que é a coisa certa me casar com ele, mas às vezes eu desejo... bem...

Julian: Aparentemente ele é um amante da música. Ele toca 3 instrumentos diferentes. O dulcimer, o trompete e o piano. Anneliese... você vai precisar da sua capa.

Anneliese: Eu? Por quê?

Julian: Não há nada como um pouco de ar fresco e uma mudança de cenário.

Anneliese: Eu gostaria que fosse assim tão simples. Vamos, Serafina. Ah, é tão bom estar fora dos muros do castelo. Ninguém sabe quem eu sou. E aí, qual era a sua casa?

Julian: Mais um quarto, na verdade. Não podíamos pagar uma casa.

Anneliese: Ah, eu não quis dizer...

Juliano: Eu sei. Terceiro andar à esquerda. Fiz todos os meus estudos lá.

Julian: Um exemplo perfeito de 'rosa centifolia'.

Anneliese: Meu favorito! Mas, você sabia disso.

Anneliese: Mmm, isso cheira delicioso.

Juliano: Já volto.

Erika: Como um pássaro que voa na luz da manhã. Ou uma borboleta na primavera. Quando seu espírito cavalga nas asas da esperança, Você encontrará suas asas.

Anneliese: Vamos ouvir, Serafina.

Erika: Pois você está sempre livre para começar de novo. E você está sempre livre para acreditar. Quando você encontrar o seu lugar que seu coração pertence-

Madame Carp: Caroling?

Erika: Madame Carpa! Espere, eu ganhei isso!

Madame Carp: E você me deve. Você realmente achou que poderia ganhar a vida como cantora? Volte ao trabalho, garota, ou haverá problemas.

Anneliese: Que música linda.

Érika: Obrigado. Minha mãe ensinou... para... mim.

Erika: Uau

Anneliese: Nós poderíamos ser irmãs.

Erika & Anneliese: Qual é o seu nome?

Erika: Você primeiro.

Anneliese: Por favor, me chame de Anneliese.

Erika: Anneliese? Você tem o mesmo nome da princesa.

Anelise: Bem...

Érika: Ah. Eu sou Erika, Sua Alteza. Você não deveria estar dentro do castelo?

Anneliese: Estou saboreando um primeiro e último gostinho de liberdade antes de me casar na próxima semana... com um completo estranho.

Erika: Pelo menos você não é um servo contratado.

Anneliese: Servo contratado?

Erika: Se eu quiser tomar meu café da manhã quente, Madame Carp vai me fazer pagar. E eu mesmo tenho que buscar os ovos e o celeiro fica a um quilômetro e meio de distância.

Está frio e úmido e ainda assim tenho uma omelete no meu prato, mas na minha cabeça estou de volta na cama aconchegada e dormindo até tarde

Anneliese: Sério?

Erika: Realmente, mas está tudo bem. Quer dizer, eu estou acostumado com isso. E você?

Anelise: Bem...

Érika: Bem?

Anneliese: Se eu quiser alguns ovos, eu toco a campainha e a empregada entra correndo. Ela os serve em uma bandeja de prata e traz uma lata de biscoitos.

E enquanto eu como, ela esfrega meus pés e os menestréis brincam. Mas prefiro ficar na minha biblioteca lendo livros de ciências o dia todo.

Erika: eu sou igual a você

Anneliese: Você é?

Erika: Você é como eu. Há algum outro lugar que preferimos estar. Em algum lugar que é nosso, em algum lugar que os sonhos se tornem realidade. Sim, eu sou uma garota como você.

Você nunca pensaria que fosse assim, mas agora eu te conheci e eu sei. É claro como o dia, certo como o céu é azul, que sou uma garota como você .

Anelise: Então! Você é um cantor?

Erika: Não, eu trabalho na penitenciária da Madame Carp. Uh, quero dizer Dress Emporium.

Anneliese: Eu amo os vestidos da Madame Carp!

Erika: Eu fiz o que você está vestindo.

Anneliese: Você fez isso? É o meu favorito. O design parece tão complicado!

Erika: Ah, mas não é mesmo...

Primeiro eu escolho um tecido do rack e prendo o molde. E eu costuro na frente e atrás e vira um vestido.

Anneliese: Eu uso o vestido, sem minha coroa e danço pelo meu quarto.

Anneliese & Erika: E imagine a vida sem a briga de um noivo desconhecido.

Anneliese: Mas eu nunca deixaria minha mãe saber. Eu não gostaria de decepcioná-la.

Erika: Eu entendo completamente.

Anneliese: eu sou igual a você

Erika: Eu acho que é verdade

Anneliese: Você é igual a mim

Erika: Sim, eu posso ver

Anneliese & Erika: Assumimos a responsabilidade.

Erika: Nós continuamos.

Anneliese: Nós continuamos.

Anneliese & Erika: Faça o que precisamos fazer. Sim, eu sou uma garota como você

Erika: eu sou igual a você

Anneliese: eu sou igual a você

Erika: Você é igual a mim

Anneliese: Você é igual a mim

Anneliese & Erika: É algo que qualquer um pode ver

Erika: Um coração que bate

Anneliese: Um coração que bate

Anneliese & Erika: Uma voz que fala a verdade. Sim, eu sou uma garota como você.

Érika: É incrível! Exceto pelo nosso cabelo.

Anneliese: Nós poderíamos ser gêmeos!

Erika e Anneliese: (risos)

Anneliese: E essa marca de nascença?

Erika: Hm, não, acho que não.

Julian: Aqui, Alteza.

Erika e Anneliese: (risos)

Julian: É... estranho.

Midas: (latindo para Serafina)

Serafina: (Miaus)

Anneliese: Serafina!

Wolfie: (Latidos)

Erika: Lobo!

Midas: Olha quem está longe do Palácio!

Serafina: Não tenha ideias, Midas. Não consigo lixar essas unhas à toa.

Midas: Vou me arriscar.

Wolfie: (Growls) Estou avisando, deixe ela em paz!

Midas: Ei! Ou você vai fazer o quê? Cospe uma bola de pelo em mim?

Wolfie: (Latidos)

Serafina: Você tem um latido bem grande, Rover!

Wolfie: Uh, é uh, Wolfie. Não Rover.

Serafina: Bem, obrigada Wolfie, não Rover. Meu nome é Serafina.

Wolfie: Uh, eu não vi você por aqui antes.

Serafina: Acho que não corremos nos mesmos círculos, mas... talvez possamos mudar isso.

Erika & Anneliese: Aí está você.

Anneliese: Acabei de ouvir seu gato latir?

Erika: Ele tem um estilo próprio.

Julian: Desculpe, Alteza, devemos voltar.

Anneliese: Um dia você deve cantar para nós no Palácio,

Erika: Sério?

Anneliese: Vou enviar alguém para você.

Erika: Estarei na casa de Madame Carp.

Anneliese: Adeus, Erika! Eu não vou esquecer.

Érika: Adeus! Vamos, Wolfie. Lobisomem? O gato comeu sua língua? Venha garoto.

--

Serafina: Posso ser delicada, mas ainda sou um felino!

Nick: Conseguimos! Vamos lá.

Nack: Venha aqui, Nick. Nosso trabalho é capturar a princesa... não seu gato!

Nick: Certo. Para que pegamos o gato?

Nack: Permita-me demonstrar, idiota.

Serafina: (Miaus)

Anneliese: Serafina? Serafina, onde você está? Serafina, vem cá menina, vem cá gatinha!

Serafina? (Suspiros)

Serafina: Bem! Isso certamente não era necessário.

Hervé: Ooo, você está bem?

Serafina: Não, eu não estou bem! Minha Senhora está lá dentro com dois hooligans, e eu tenho sujeira... sujeira no meu traseiro! Quem é Você?

Hervé: Hervé.

Serafina: Prazer em conhecê-lo, Hervé. Eu sou Serafina.

Anneliese: Eu ordeno que você destranque esta porta!

Nick: Sim, Alteza!

Nack: (imitando) Sim, Alteza! Estamos no comando aqui!

Nick: Certo. Eu sabia!

Serafina: Não acredito que não me deixam entrar lá. Minha princesa precisa de mim.

Hervé: Tenho certeza que o chefe vai deixá-la sair.

Serafina: Que chefe?

Hervé: Aquele chefe!

Nack: Assinado, selado e entregue Master Preminger!

Preminger: Ela sabe que estou por trás disso?

Nack: Não faço ideia.

Premiê: Ótimo! Mantenha-a aqui até que o casamento com o Rei Dominick seja cancelado.

Serafina: (sobressalta-se)

Preminger: Então vamos ver com quem a princesa se casa!

Serafina: Ah, ele é nojento! Assim como seu cachorro. Acha que pode me levar até o telhado?

Hervé: Não sei. É bem alto.

Serafina: Você pode fazer isso! Confie em mim, Hervé. Basta contar até três.

Hervé: Un, deux, troi-AHHHHH!!!

Serafina: Obrigada, Hervé. Uma garota tem que fazer o que uma garota tem que fazer!

Anneliese: Serafina?

Serafina: Eu simplesmente não vou olhar para mim mesma.

--

Rainha Genevieve: Anneliese. Anneliese, querida? Você está aqui? Onde ela poderia estar? Ela não estava no café da manhã.

Preminger: Isso é algo na mesa dela, Sua Majestade?

Rainha Genevieve: Ah, uma carta para mim. (Suspiros) Diz que ela fugiu, então ela não terá que se casar com o Rei Dominick!

Preminger: Bem, isso é terrível!

Rainha Genevieve: Temos que encontrá-la. Ela pode se machucar!

Preminger: Bem, enviarei grupos de busca imediatamente, Sua Majestade. Tenho certeza que ela não poderia ter ido longe.

Rainha Genevieve: Preminger, o que eu faria sem você?

Embaixador Bismark: Isso é um ultraje! O insulto mais grave!

Rainha Genevieve: Tenho certeza de que a encontraremos.

Embaixador Bismark: Eu insisto que cancelemos o casamento se a princesa não retornar até o final do dia!

Julian: Não faz sentido. Por que ela fugiria?

Preminger: Por que você não vê por si mesmo.

Juliano: Lilás? Onde você achou isso?

Preminger: Na mesa da princesa.

Julian: Talvez eu possa ajudá-lo a procurá-la.

Preminger: Por que você não fica com seus livros, colegial. Não seria divertido? (Risos)

Juliano: Lilás? Ela nunca perfumou seu papel de carta com lilás. Sempre foi rosa.

--

Madame Carp: Bem- vindo, senhor. Você está procurando um vestido para uma senhora especial? Posso assegurar-lhe que encontrará apenas os melhores no Madame Carp's.

Julian: Se me permite, gostaria de falar com uma de suas costureiras, senhorita Erika.

Erika: Eu não acredito! A princesa mandou me chamar!

Julian: Ah, na verdade ...

Erika: Eu vou cantar no castelo... eu!

Julian: Eu vim porque...

Erika: Mas, eu não estou pronta. Eu tenho que ensaiar!

Juliana: Se eu pudesse...

Erika: É melhor eu trocar de vestido. Ho-ho, do que estou falando? Eu só tenho um vestido! Espere, não é por isso que você está aqui?

Julian: Desculpe, mas não. A princesa está desaparecida e preciso que você me ajude a encontrá-la.

Erika: Eu? Bem, o que posso fazer?

Julian: Finja ser a princesa Anneliese.

Erika: (sobressalta-se) Você está louco?

Juliano: Apenas ouça. Suspeito que Preminger, o conselheiro da rainha, tenha levado a princesa para algum lugar para que o casamento real seja cancelado.

Erika: Isso é horrível.

Julian: Se você fingir ser a princesa, só por um tempinho, eu posso enganar Preminger para revelar onde ele a está escondendo.

Erika: Fingir ser realeza? Eu poderia ser jogado na prisão, ou pior!

Julian: Eu também, mas...

Erika: Ela está com problemas reais, não é? Uma garota como eu... Conte comigo.

--

Erika: Você olharia para o tamanho deste lugar!

Julian: A semelhança é notável.

Erika: Exceto pelo meu cabelo.

Juliano: Já pensei nisso.

Wolfie: (Latidos)

Erika: Lobo! Agradável!

Julian: Loiro em uma caixa.

Erika: Hum, Julian, estamos perdendo um pequeno detalhe. Eu não sei nada sobre ser uma princesa.

Julian: Deixe isso comigo.

Está tudo aqui no Livro de Etiqueta da Princesa. Vamos começar. Não é permitido reclamar, se gabar, suar, se preocupar, escorregar, tropeçar, chupar, arrotar, twittar ou esbanjar. Fique presente, fique agradável, fique orgulhoso.

Ser princesa é saber qual colher usar. Ser princesa é mil pares de sapatos. Para manter uma marcha régia, deixe a salsa no seu prato. E seja charmoso, mas desapegado e divertido. Ser princesa é nunca ser confundida.

Faça um plié e nunca caia, nunca se desvie do protocolo. Durante todo o dia, há apenas uma maneira de se comportar. Mantenha um aperto e nunca estale o lábio superior rígido e arqueie as costas. Dobre de cima e sempre use suas luvas e acene.

Ombros para trás e barriga para dentro e mindinho para fora e levante o queixo e lentamente vire a cabeça de um lado para o outro.

Erika: Agora estou vendo.

Julian: Respirando suavemente, pisando levemente. Sorria brilhantemente, acene com a cabeça educadamente. Nunca mostre uma coisa que você sente por dentro. Deslizar! Ser uma princesa é estar sempre no seu melhor. Ser princesa é nunca descansar.

Sente-se para um retrato, nunca se contorça. Durma em um colchão extra firme. Fale e seja inteligente, nunca perca as palavras. Uma reverência a cada conde e senhor. Aprenda a tocar cravo. Cante canções de ninar e sempre harmonize em terços.

Julian & Erika: Terços, terços.

Julian: E... ela tem olhos lindos, seu ânimo aumenta quando ela entra na sala.

Erika: Entendi .

Julian: As portas se fecham e a química cresce. Ela é como uma rosa que está sempre em flor. (sua voz falha e ele tosse) Faça um plié e não

Erika: Nunca cair

Julian: Nunca demonstre desânimo

Erika: E estar lá quando as pessoas ligarem

Julian: Esteja preparado para o que a vida real trará. Mantenha o controle e não...

Erika: Nunca rachar

Julian: Tome um gole delicado

Erika: Nunca vire as costas

Julian: Há uma hora, um lugar e um jeito para tudo. Ser princesa é nunca arrumar a cama. Ser princesa é usar sempre a cabeça. Érika: Ah!

--

Embaixador Bismark: É oficial, então. Devido ao desaparecimento da princesa, o casamento com o rei Dominick é cancelado.

Julian: Alteza, espere! Posso apresentar, Princesa Anneliese.

Rainha Genevieve: Querida?

Érika: Uau! Ufa.

Rainha Genevieve: Anneliese? Oh-ho, você está de volta! Onde você esteve?

Érika: me desculpe. Eu não deveria ter fugido.

Rainha Genevieve: Prometa-me que nunca mais fará isso.

Embaixador Bismark: Ainda acho que devemos cancelar o casamento.

Rei Dominick: (tosse)

Embaixador Bismark: Sim, sim, mas um acordo é um acordo. O casamento está de volta! O Rei Dominick está... está... está previsto para amanhã!

Rainha Genevieve: Maravilhoso.

Erika: Ah, amanhã?

Rainha Genevieve: E então, apenas alguns dias antes do casamento. Alguém viu meus óculos?

Preminger: Se você me dá licença, eu devo sair para ver os... ack!... arranjos. Ahh! Quem deixou esta besta sarnenta entrar aqui?

Julian: Tudo bem, Preminger?

Preminger: Em breve será. (risos)

Julian: O que você tem aí, garoto? De um abeto prateado. O que Preminger está fazendo na Floresta Ocidental?

Rainha Genevieve: Julian, espere! Eu quero saber tudo sobre como você encontrou Anneliese!

Julian: Ah... ah... claro, Majestade.

--

Nick: Oi! Acontece que eu sei que você tem um 5 de copas.

Nack: O que você quer dizer com você sabe?

Nick: Eu vi!

Nack: Você quer dizer que você trapaceou!

Nack: Sim. Eu quero dizer não!

Anneliese: Socorro, socorro! Por favor me ajude!

Nick: Sim, Alteza?

Nack: O que é?

Anneliese: Depressa!

Nack/Nick: Fantasma!

Anneliese: Pegue! Rápido!

Nick: Você é mais velho, entendeu!

Nack: Você está mais perto, você entendeu! Tem-me!

Nick: Socorro!

Nack: Não, por favor!

Anneliese: Muito bem, Serafina. Vá, vá!

Preminger: Deixe-me entrar... seus idiotas!

Nack: Seu chefe, está tudo bem. Bem, bem, bem, bem. Bem! Vejo você em breve.

Preminger: Como ela escapou?

Nack: Quem?

Premier: Quem? A princesa! Seu idiota! Idiota!

Nack: A princesa está aqui. Dormindo! Você não está dormindo, princesa?!

Nick: (voz aguda) Sim. Estou dormindo.

Nack: Agora, chefe, você não quer acordá-la, não é? Ela é uma realeza... Ela é uma realeza, tudo bem,

Preminger: Uma dor real nas costas!

Nick: Quem interrompe meu chinelo?

Nack: Durma, seu cabeça-dura!

Nick: Dormir, certo! (Em voz normal): Eu sabia disso.

Preminger: Saia dessa cama! Eu posso descobrir como a princesa escapou de seus tolos! Mas por que ela não contou à rainha que tinha sido capturada? Hmm, algo está estranho. Devo resolver este quebra-cabeça de princesa se quiser ser rei.

Juliano: Rei? Premier?

Preminger: Procurando alguma coisa, Julian?

Julian: Como você pode ser rei?

Preminger: Você é o tutor. Você deveria ter todas as respostas.

Anneliese: Venha cá, Serafina.

Guarda: Quem vai lá?

Anneliese: Princesa Anneliese!

Guarda: Se você é a princesa, eu sou o rei.

Anneliese: Mas, eu sou a princesa.

Guarda: Sério? Então por que acabei de ver a princesa jantando com a rainha?

Anneliese: Que princesa?

Guarda: Agora vá em frente antes que eu perca a paciência.

Anneliese: Você está falando com a princesa Anneliese! Deixe-me passar!

Guarda: Eu disse seguir em frente! Agora!

Anneliese: Encontraremos ajuda aqui.

Madame Carp: O que você está fazendo aqui?

Anneliese: Desculpe!

Madame Carp: Nem mais uma palavra! Você vem comigo!

Ainda não feito? Se você não fosse uma... vaca preguiçosa... aqueles vestidos já estariam prontos.

Anneliese: Como você ousa falar com ela desse jeito!

Madame Carp: Como ouso? Hh-como eu me atrevo?! Quem você pensa que é?

Anneliese: Princesa Anneliese!

Madame Carp: Isso é uma piada! Você tem que mudar muito mais do que seu cabelo para se parecer com a princesa. Por que eu e a princesa somos amigos íntimos e pessoais.

Anneliese: Ah é mesmo?

Madame Carp: Agora, cale a boca e volte ao trabalho!

Anneliese: Estou avisando, se você vai tratar suas costureiras dessa maneira, levaremos nossos negócios reais para outro lugar.

Madame Carp: Você está me avisando? Veremos sua atitude mudar pela manhã. Você não vai sair até que todos os vestidos estejam prontos... Erika!

Anneliese: Erika? Trancado novamente!

Bertie: Érika? Esse é você, não é?

Anneliese: "Feito exclusivamente por Madame Carp".

Bertie: Se Wolfie consegue entrar e sair, tenho certeza que sua linda Serafina também consegue.

Anneliese: Agora depende de você, Serafina. Leve isso para o Castelo. Quando alguém ler o rótulo, isso os levará até aqui.

Serafina: Esta vai ser uma longa noite.

--

Erika: Achei que estava sonhando, mas não estou. Shh! Wolfie, temos que agir como se vivêssemos aqui! Não podemos nos entregar. Seja uma princesa! Seja uma princesa! Entre.

Empregada: Eu ouvi um cachorro, Sua Majestade? Devo ligar para o Royal Dogcatcher?

Erika: Ah, não, não. Cão? Tudo está bem.

Empregada: Seu café da manhã, Sua Alteza.

Erika: Sério? Na cama?

Empregada: Como sempre.

Érika: Ah sim. Claro. Obrigada. Olhe para toda esta comida! Quer um pouco?

Empregada: Ah, eu não podia, Alteza!

Erika: Mas há o suficiente para alimentar um exército! Vamos, pegue um pouco.

Empregada: Eu, uh, obrigado, hum, senhora. Eu preparo seu banho. Você gostaria de bolhas, sais minerais ou óleo de lavanda

Érika: Tudo!

Embaixador Bismark: Você vai dizer a ela que você se disfarçou de pajem? Tem certeza de que é sábio, Rei Dominick?

Rei Dominick: Não, não tenho certeza. Mas tenho que ser honesto. Acho que ela vai entender. Eu não queria me casar com um estranho mais do que ela.

Erika: (Suspirando) Talvez eu nunca saia.

Wolfie: Mehh-

Erika: O que há de errado, Wolfie? Você está doente? Algo em sua garganta?

Wolfie: Mehh-

Erika: Espere um minuto. Você está tentando miar?

Wolfie: Mehh- Woof!

Erika: Ah, cara... Eu posso ver quando você está se sentindo pra baixo, você não pode esconder isso de mim. Você não é nenhum status quo calico então por que continuar tentando ser? Porque você é mais do que isso, você é um gato canino. Eu gostaria que você pudesse ver o que eu vejo...

Wolfie: Mehh-

Erika: Não. Eu digo, se você latir comemore. Deixe sua marca, faça uma serenata. A arca de Noé deveria ter um gato como você. E se o que você é é um estranho você. Não significa que você deve mudar você. Só significa que você deve mudar seu ponto de vista...

Rei Dominick: Princesa Anneliese?

Erika: Ei, felino. Você busca muito bem você. Para ti mesmo ser verdadeiro. Seu arco wow é o miado do gato. É como eu sei que você é você.

Você não precisa de arcos ou tiara, lance suas aflições sayonara. Confie no seu nariz porque ele sabe o caminho a seguir. Quando você persegue seu rabo, você é encantador. O espírito navega quando você está ofegante. Quando você chora, você é um rover, Romeo.

Não há um cabelo seu que eu reorganizaria. Eu te amo do jeito que você é e isso nunca vai mudar. Isso nunca vai... mudar.

Wolfie: Ufa!

Erika: Esse é o meu menino!

Anneliese: Pronto, acabou! Ah, tipo...

Bertie: Por favor, Alteza, você não tem que fazer isso!

Anneliese: Não posso deixar você fazer tudo sozinha.

--

Erika: Como vou fazer isso? Todo mundo vai saber que eu sou uma farsa. Eles vão me jogar na masmorra em dois segundos! Oh Julian, onde você está? Por que você não está aqui?

Preminger: Sua mais bela, Alteza.

Wolfie: (Latido para Preminger)

Preminger: O que esse gato estúpido está fazendo aqui?

Erika: Ele pertence a mim!

Premier: Ah! Ele é seu, é? Bem, mil desculpas, minha senhora. Um canino... felino. O que aconteceu com o outro?

Erika: Uh... ela está por aqui em algum lugar.

Preminger: Entendo. Tão raro... que vocês estão separados. A rainha me enviou para escoltá-lo ao encontro do rei.

Erika: Uhh... Obrigado.

Rei Dominick: Agradeço sua compreensão, majestade.

Rainha Genevieve: Da mesma forma, Rei Dominick. Peço desculpas pelo pequeno atraso da minha filha nos planos do casamento. Mas já está tudo resolvido.

Preminger: Posso anunciar, Princesa Anneliese.

Rainha Genevieve: Oi, querida. Vem vem. Quero apresentá-lo ao Rei Dominick. Ele tem algo que quer te dizer. Onde estão meus óculos?

Rei Dominick: Estou honrado.

Erika: Uhh... A honra é minha, Rei Dominick.

Dominick: Por favor, me chame de Dominick.

Erika: Ah, me chame de Eri... quero dizer Anneliese. Princesa Anneliese. Esse é o meu nome.

Wolfie: (Latidos e Miados)

Rei Dominick: Espero que seu latido seja maior que sua mordida.

Erika: Ele gosta de você.

Rei Dominick: Tenho certeza que você está se perguntando por que eu me disfarcei de pajem. Eu queria conhecê-lo sem tudo isso, essa cerimônia. Para conhecer o verdadeiro você.

Erika: Uh, o verdadeiro eu...

Rainha Genevieve: Rei Dominick, você nos daria a honra de tocar piano? Eu sei que você ama música.

Erika: Você quer?

Rei Dominick: Eu vou, se a princesa concordar em cantar comigo.

Erika: Cante com você. Uh, não, não, eu não poderia.

King Dominick: Algo me diz que você tem uma voz maravilhosa.

Rainha Genevieve: Cante, querida.

Erika: Uma vez uma moça conheceu um rapaz. "Você é um gentil", disse ela. Em meu coração eu ficaria feliz se você me amasse por mim. Você diz que seu amor é verdadeiro e eu espero que seja...

Rei Dominick: Eu teria certeza, se soubesse que você me ama por mim.

Erika: Eu poderia ser aquele que você está procurando? Eu serei aquele que você escolher? Você pode dizer que meu coração está falando? Meus olhos vão te dar pistas

Rei Dominick: O que você vê pode ser enganador, a verdade está sob a pele...

Erika: A esperança florescerá acreditando

Erika & Dominick: O coração que está dentro

Rei Dominick: Eu serei seu. Juntos seremos sempre como um, se você me ama por mim.

Erika (Dominick): Quem pode dizer para onde vamos? (Eu serei seu. Juntos sempre seremos como um) Quem pode prometer o que será... Mas eu ficarei ao seu lado se você me amar por mim.

Erika & Dominick: Se você me ama por mim.

Dominick: De tirar o fôlego.

Erika: O pôr do sol mais bonito que já vi.

Dominick: Há algo em você... Você é honesto... sem pretensão. Eu gosto disso. Até amanhã, Alteza.

Erika: "Honesta"? "Sem pretensões"? Oh, Wolfie, Julian e a princesa ainda estão desaparecidos. E acho que estou me apaixonando pelo rei.

Preminger: Ora, é o nosso pequeno felino desaparecido.

Serafina: (Miaus)

Midas: (rosna)

Preminger: Mas com atitude, ah sim! Eu nunca gostei de gatos. Hum. O anel da princesa. Que estranho. Loja de vestidos da Madame Carp? Talvez a resposta para o nosso mistério.

Serafina: Obrigada, Hervé. (sobressalta-se) Minha princesa!

Anneliese: Preminger, você encontrou meu anel! Você boa menina!

Premiê: Princesa...

Serafina: (Miau com raiva)

Anneliese: Serafina, o que deu em você?

Preminger: Venha depressa, princesa. Você pode me contar tudo a caminho do castelo.

Anneliese: Mas primeiro deixe-me... Não, não. Sem tempo, Alteza.

Bertie: Princesa?

Anneliese: O que estamos fazendo aqui?

Preminger: Fazendo uma pequena viagem, princesa.

Anneliese: Você estava por trás disso!

Preminger: Muito esperto plantando um dublê para enganar até a mim. Mas não suficientemente inteligente. Xeque-mate! Eu ganhei.

Anneliese: Serafina!

Nack: Prazer em vê-lo novamente, Sua Alteza.

Nick: Cuidado com o passo.

Anneliese: Não entendo, Preminger. Por que você faria isso?

Nick: Para ser rei.

Anneliese: E como você se tornaria rei?

Preminger: Ainda me subestimando? Isso não é como uma realeza.

Nack: Ele ia se casar com você

Anneliese: O que?!

Nack: Agora, ele tem uma nova noiva em mente.

Preminger: Sua mãe é uma mulher muito bonita. (ri maliciosamente)

Anneliese: Juliano!

Juliana: Anneliese?!

Preminger: Como eles ficarão tristes quando descobrirem que você morreu em um trágico acidente.

Julian: Eles nunca vão desistir de procurar a princesa!

Preminger: Ah, eu acho que eles vão. Quando eu mostrar isso a eles! (risadas malignas) Oh, isso é engraçado.

Juliano: Não adianta.

Anneliese: Temos que detê-lo.

Preminger: Coloque um pouco de músculo por trás disso!

Anneliese: O que é isso?

Preminger: Mova-se!

-- Rainha Genevieve: Tudo parece estar em ordem. Obrigado, Embaixador. Os reinos serão oficialmente unidos após o casamento amanhã. Você está pronto, querido?

Erika: Pronto...ha..ha, bem...

Rei Dominick: Para minha noiva ser.

Érika: Uau!

Preminger: Agarre ela! Ela é uma impostora!

Rainha Genevieve: Preminger, o que você está fazendo?

Erika: Tire suas mãos de mim!

Rei Dominick: Solte a princesa!

Preminger: Ela é uma farsa! Um mendigo comum!

Rainha Genevieve: Você está me dizendo que eu não conheço minha própria filha?

Preminger: Acabei de descobrir a verdade, majestade. Você não se perguntou por que não vimos Julian ultimamente? Ele está conspirando com este... este impostor! Juntos, eles pegaram a princesa e a esconderam na Mina Real para que ela pudesse tomar seu lugar, casar-se com o Rei Dominick e assumir o reino!

Rei Dominick: E que prova você tem dessa história ridícula?

Preminger: Assim que descobri essa traição, tentei resgatar a princesa, mas já era tarde demais. Eles sabotaram a Mina, derrubando-a. Receio que estes sejam todos os meus trabalhadores encontrados nos escombros.

Rainha Genevieve: Não! Não pode ser!

Preminger: Verifique o ombro dela! Não há nenhuma marca de nascença real. Eu te asseguro.

Rainha Genevieve: É verdade...

Rei Dominick: Não acredito.

Erika: Eu posso explicar.

Preminger: Jogue ela no calabouço!

Erika: Não, espere! Eu não sou a princesa, mas nunca machuquei ela ou qualquer outra pessoa!

Embaixador Bismark: Inacreditável! É uma indignação!

Erika: Eu só queria salvar a princesa! Dele!

Preminger: A masmorra!

Rainha Genevieve: Minha filha... Minha pobre filha...

Embaixador Bismark: O que eles nos consideram? Tolos? Tentando casá-lo com um mero mendigo!?

Rei Dominick: Não faz sentido.

Embaixador Bismark: Devo dizer que não. Quanto mais cedo partirmos, mais feliz serei.

Erika: Faça um plié  e nunca caia. Nunca fuja do protocolo. Durante todo o dia há apenas uma maneira, você deve se comportar. Mantenha um aperto e nunca estale, Lábio superior rígido... Lábio superior rígido... chora)

Rainha Genevieve: (soluços)

Premier: Ah! Apenas quem eu queria ver.

Rainha Genevieve: Preminger, o que é?

Preminger: Tantos problemas. Estou aqui para ajudar.

Rainha Genevieve: Você não pode trazer minha filha de volta.

Preminger: Verdade demais. Mas posso dar a resposta para salvar seu Reino. Um pequeno empreendimento meu foi muito bem sucedido. Você poderia dizer que eu "atingi o ouro". Sou tão rico quanto o Rei Dominick.

Bem, sua boa sorte se foi e seu povo em breve morrerá de fome. Au revoir para o seu foie gras e fondues de queijo. Mas porque tenho um coração tão bom, metade da minha fortuna vou esculpir. Eu sinto sua dor, então como eu poderia recusar?

Mas para me dar algum incentivo, há apenas uma coisa que eu preciso. E é algo que você nunca usa. E não é nada tão inventivo apenas a única coisa que desejo. Esta coroa simples, sim, como eu poderia recusar?

Oh, não deixe seu ânimo vacilar Eu tenho uma caixa de anel na minha mão, e reservei uma banda, então pegue seus sapatos de dança. E venha comigo ao altar ver o lingdom como você planeja. Sim, case comigo, como você pode recusar? Como você pode recusar? (Risada maligna)

--

Hervé: Você é Wolfie? Amigo de Serafina?

Wolfie: Eu gosto de pensar assim.

Hervé: Ela precisa de ajuda, e a princesa também.

Wolfie: O que? Mostre-me, rápido!

Serafina: (Chora)

Anneliese: Desculpe, Serafina!

Julian: É impossível. Sinto muito, Anneliese.

Anneliese: Você sabe por que eu não queria me casar com o rei?

Julian: Você não estava pronto para se casar.

Anneliese: Não, eu estava apaixonada por outra pessoa. O meu melhor amigo. O homem que me ensinou tanto.

Julian: Mas eu não sou um rei. Eu não posso te dar o que ele pode.

Anneliese: Eu acho que você é assim.

Juliana: Uma pedra?

Anneliese: Despretensiosa por fora e um tesouro por dentro.

Julian: Nós vamos sair daqui de alguma forma. Eu prometo.

Wolfie: Não me diga que ela está lá.

Hervé: Tudo bem, não vou te contar.

Wolfie: (funga) Ooo, estou ficando... Ooo sim, estou ficando...

Hervé: Uh, tonto?

Wolfie: Não. Um cheiro. Há outra maneira de entrar.

Preminger: Olhe para você... olhando para mim. Encantador.

Serafina: (sobressalta-se)

Wolf: Oi! Ei, ei, ei! Aqui embaixo! (começa a cavar) O que você acha disso?

Hervé: Oh, uh, você é um excelente escavador.

Wolfie: Obrigado, mas eu quis dizer olhe! Aposto que consigo chegar até Serafina e a princesa assim.

Erika: (Silenciosamente cantarola "If You Love me for me")

Hervé: Você vai lá embaixo?

Wolfie: Um gato sempre cai de pé, mesmo aquele que late! (Latidos)

Anneliese: A gata da Erika?

Julian: Um antigo poço de mina.

Anneliese: Alô? Alguém aí em cima? Água... Aqui, me ajude! Lindo.

Erika: (continua a cantarolar "If You Love me for me" até ela escapar) Não, deixe-me ir!

Guarda: Achei que você poderia escapar, não é? Eu vou prendê-la.

Rei Dominick (disfarçado de Guarda): Devo levá-la ao castelo.

Guarda: Mas...

Rei Dominick: Ordens da Rainha.

Guarda: Ah, bem, então.

Nack: Parecendo bem, Sir Nick.

Nick: Sentindo-se bem, Sir Nack.

Preminger: Sorria, minha querida. Você está prestes a se tornar minha rainha.

Rainha Genevieve: Apenas para salvar meu povo. Sua fortuna irá ajudá-los a todos.

Rei Dominick: Por aqui . Ei! Acho que eu merecia isso.

Erika: Domingos? preciso explicar...

Rei Dominick: Eu não acredito que você seja a pessoa que Preminger diz que você é.

Erika: Você adora disfarces, não é?

Rei Dominick: Venha, precisamos nos apressar!

Sacerdote: Você, Preminger, aceita essa mulher como sua noiva?

Premier: Sim. Como eu poderia recusar?

Sacerdote: E você, minha rainha, aceita este homem como seu marido?

Rainha Genevieve: Eu... eu... uh eu... eu... eu...

Anneliese: Espere! Esperar! Pare o casamento, mãe!

Rainha Genevieve: (sobressalta-se de felicidade) Anneliese?

Preminger: Mas ela está morta, Alteza! O impostor deve ter escapado.

Anneliese: Não, Preminger!

Rainha Genevieve: É você! Meu querido.

Multidão: É a princesa! Ela está de volta!

Erika: É a princesa! Ela está viva!

Rainha Genevieve: Mas onde você estava? Eu pensei...

Anneliese: O que ele queria que você pensasse!

Rainha Genevieve: Guardas! Pegue-o!

Premiê: Oi!

Erika: Ele não pode fugir!

Rei Dominick: Ele não vai fugir!

Anneliese: Prazer em vê-lo novamente.

Erika: Indo para algum lugar?

Wolfie: Não tão rápido, inchado!

Serafina: Agora quem não tem para onde ir?

Midas: Sim, nenhum lugar para ir... mas através de você! Meu dente! Ai meu dente lindo!

Preminger: Mais rápido, seu velho! Já vi caracóis mais rápido! O que você está fazendo? Inversão de marcha! Pare, sua besta estúpida! Eu disse pare!

Serafina: Gosto do seu estilo, Hervé.

Hervé: Eu também.

--

Rainha Genevieve: Preminger me fez de bobo. Sinto muito, minha querida Anneliese. Quando penso no que pode ter acontecido...

Anneliese: Mas não. Obrigado a Erika e ao homem que amo... Julian.

Rainha Genevieve: Julian?

Anneliese: Ele é gentil, inteligente e meu melhor amigo. Mãe, é Julian com quem quero casar.

Rainha Genevieve: Eu quero que você seja feliz. Mas é nosso dever cuidar primeiro do nosso povo.

Anneliese: Eu posso fazer isso. Encontrei algo muito interessante na mina.

Rei Dominick: Não posso convencê-lo a ficar?

Erika: Dominick, eu... Toda a minha vida sonhei em ser livre. Agora minha dívida foi paga, graças a Anneliese.

Rei Dominick: Onde você irá?

Erika: Em todos os lugares. Eu quero cantar, ver o mundo!

Rei Dominick: Então, espero que você leve isso com você.

Erika: Não consegui.

Dominick: Foi feito para você.

Erika: Sem promessas?

Rei Dominick: Vou me arriscar.

--

Narrador: A princesa Anneliese estava certa sobre a Mina. Ela descobriu que estava cheio de geodos. Sob sua direção, os belos cristais criaram uma nova indústria. O reino foi salvo.

Quanto a Madame Carp, sem a palavra do Castelo, ela faliu.

Depois de meses viajando, Erika percebeu que havia um lugar que ela queria ficar mais do que qualquer outro. Às vezes, ser livre significa escolher não ir, mas ficar.

Erika: E você está sempre livre para começar de novo, e você está sempre livre para acreditar. Quando você encontrar o lugar ao qual seu coração pertence, você nunca mais sairá...

Anneliese: Você e eu sempre estaremos celebrando a vida juntos.

Erika & Anneliese: Eu sei que encontrei um amigo para sempre.

Anneliese: O amor é como uma melodia, que sempre guardarei como um tesouro., a coragem é a chave que abre todas as portas...

Erika & Anneliese: Embora você não saiba onde seus dons podem levar, e pode não aparecer no início. Quando você vive seus sonhos, descobrirá que o destino está escrito em seu coração...

Narrador: E, claro, Wolfie e Serafina viveram felizes para sempre. Junto com seus muitos, muitos, muitos gatinhos.

Gatinho: (mia e depois late)

Todos os cantores principais: Embora você não saiba onde seus dons podem levar, e pode não aparecer no início. Quando você viver o seu sonho, descobrirá que o destino está escrito em seu coração.

--

Erros de gravação:
Diretor: O gato em pé está pronto. Teste de dublê de Serafina: faça um. E... ação! (Gato voa acima do telhado e nunca é visto)

Serafina: Ah, querida.

Diretor: Silêncio no set, por favor. E... ação! (Gato bate na parede)

Serafina: Uh, eu tenho certeza que isso é uma boa ideia.

Diretor: Take 37. E... ação! (Gato entra na casa batendo na janela) Olay, vamos trazer Serafina!

Serafina: Uh, você pode chamar meu agente no telefone?

-

Preminger: Nossa , você é atraente. -

Erika: Você não tem status quo calico, então por que continuar tentando ser, porque você é mais do que isso, você é um cão...

Wolfie: (salpicos) Woof!

Erika: Lobo!

Diretor: Corte! Ok, posso pegar um secador de cabelo aqui?

-

Preminger: Você não é agradável aos olhos você, reflexo você!

-

Diretor: Carrinho de mina, pegue um. E... ação!

(Somente Nack pula no carrinho)

Diretor: Corte! Uh Nick, hum, você deveria pular no carrinho.

Nick: Certo. Eu sabia!

-

Preminger: Isso é realmente eu? Lá? Olhando para mim? Sorte minha!

- Rei Dominick: De tirar o fôlego!

Erika: (suspira)

(Toques de celular)

Erika: (sobressalta-se) Haha, que romântico, né?

-

Preminger: Muito bonito, muito em forma! Muito irresistivel!

-

Julian: Faça um plié e não

Erika: Nunca cair

Julian: Nunca demonstre desânimo (começa a dançar aleatoriamente)

Érika: (risos)

-
`)