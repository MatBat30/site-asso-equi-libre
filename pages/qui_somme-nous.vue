<template>
  <v-container style="border: 2px solid green" class="border = 1px ">
    <v-row style="border: 1px solid blue">
      <v-col style="border: 1px solid red" cols="12">
        <h1 class="text-center text-h2 my-5 pb-5">
          Qui somme nous
        </h1>
      </v-col>
    </v-row>

    <v-row style="border: 1px solid blue">
      <v-col style="border: 1px solid white" cols="5" offset="0">
        <p class="text-justify ">
          Equi-libre est une association refuge à but non lucratif, créée en 2000 et reconnue
          d'intérêt général. Elle est située à Route de Barjac quartier, La Blaquette, 30760 Le Garn, dans le Gard,
          limitrophe de l'Ardèche. Sous la présidence de Mme BATAILLER Anne, une volontaire passionnée et dévouée aux
          animaux, l'association a pour objectif premier de prendre en charge des animaux dans le besoin, qu'ils
          soient
          saisis par les autorités, abandonnés, en fin de vie, ou faisant l'objet de cessions volontaires, entre
          autres cas.
        </p>
        <p class="text-justify ">
          Afin d'offrir aux animaux un lieu de vie le plus proche possible de leurs besoins spécifiques, Equi-libre
          s'assure
          de leur fournir une vie de groupe en semi-liberté ainsi qu'une alimentation adaptée à leurs pathologies, si
          nécessaire. La structure s'étend sur environ 80 hectares, répartis sur 7 communes, comprenant des terres
          communales, des éco-pâturages, des surfaces privées et des zones sous convention.
        </p>
        <p class="text-justify ">
          En juillet 2021, la création d'un hangar de 750m² a permis d'augmenter la surface de stockage alimentaire et
          matériel, ainsi que d'intégrer 3 box, dont 1 dédié aux soins vétérinaires, incluant un portique et un
          harnais de
          levage. À l'origine dédiée aux équidés, l'association Equi-libre a étendu son domaine d'activité au
          sauvetage
          d'animaux de ferme dans sa globalité.
        </p>
        <p class="text-justify ">
          Une fois rétablis, les pensionnaires peuvent être mis à l'adoption sous contrat entre l'adoptant et
          l'association,
          sous certains critères bien définis. En choisissant Equi-libre, vous contribuez à soutenir une association
          engagée
          dans la protection et le bien-être des animaux.
        </p>
      </v-col>

      <v-col style="border: 1px solid white" cols="5" offset="1">
        <v-card>
          <v-card-text>
            <v-responsive>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2Fprotectionretraite30%2Fvideos%2F1279523292626678%2F&show_text=false&width=560&t=0"
                width="100%"
                height="350"
                style="border:none;overflow:hidden"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </v-responsive>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col style="border: 1px solid white" cols="5" offset="0">
        <v-container fluid>
          <v-row>
            <v-card>
              <v-card-text>
                <p class="text-h6">
                  Nous sommes fiers de collaborer avec plusieurs partenaires qui partagent nos objectifs :
                </p>
              </v-card-text>
            </v-card>
          </v-row>
          <v-row>
            <v-col v-for="(item, i) in partenairs" :key="i" cols="3">
              <a :href="item.lien">
                <img :src="item.img" :alt="item.alt">
              </a>
            </v-col>
            <v-col v-for="(item, n) in partenairsnolink" :key="n" cols="3">
              <img :src="item.img" :alt="item.alt">
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col style="border: 1px solid white" cols="5" offset="1">
        <v-card color="goldenrod">
          <v-card-text>
            <p class="text-h5" style="color: whitesmoke">
              Notre association, Equi-libre, est fière de pouvoir compter sur une équipe bénévole soudée et dynamique,
              épaulée par plusieurs vétérinaires qui nous aident à prodiguer des soins adaptés à chacun de nos pensionnaires.
            </p>
            <p class="text-h5" style="color: whitesmoke">
              Nous disposons notamment de professionnels  équin,camélidé, bovin, ovin, caprin,félin, canin, et léporidés, mais également d'un podologue,
              d'un dentiste, d'un maréchal-ferrant, d'un ostéopathe, d'une radiesthésiste en magnétisme, d'une kinésiologue naturopathe.
            </p>
            <p class="text-h5" style="color: whitesmoke">
              Nous avons la chance de bénéficier du soutien de nombreux donateurs et partenaires alimentaires réguliers, tels que le magasin Boum Fruits et Légumes,
              la cantine des écoles et collèges de Pont Saint Esprit, la laiterie Gilbert, Saveur Fruits et Nectar de M. Vaschalde, Animal Webaction et des dons de particuliers.
            </p>
            <p class="text-h5" style="color: whitesmoke">
              En ce qui concerne les pâtures, nous avons l'opportunité de les avoir à disposition grâce à Cyclife France (Codolet), Maximin Jullien, la mairie de Saint Julien de
              Peyrolas, la mairie de Laval Saint Roman, la mairie d'Issirac, ainsi que grâce au prêt de particuliers et d'agriculteurs situés dans les secteurs de Le Garn,
              Issirac, Saint Paulet de Caisson, Aiguèze, Saint Christol de Rodières, Laval Saint Roman et Saint Just d'Ardèche.
            </p>
            <p class="text-h5" style="color: whitesmoke">
              Chez Equi-libre, nous sommes conscients que notre force réside avant tout dans notre équipe soudée et
              notre réseau de partenaires et donateurs fidèles, qui nous permettent de prendre soin de nos pensionnaires
              dans les meilleures conditions possibles.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      videoSrc: 'https://fb.watch/j0iVCFITUX/',
      partenairs: [
        {
          img: require('../static/logoh100.png'),
          lien: 'https://www.graal-defenseanimale.org/index.php',
          alt: ''
        },
        {
          img: require('../static/brave_RQSLsiZOXU.png'),
          lien: 'https://www.animalwebaction.com/fr/',
          alt: ''
        }
      ],
      partenairsnolink: [
        {
          img: 'https://via.placeholder.com/150x150.png?text=Image+2',
          alt: ''
        },
        {
          img: 'https://via.placeholder.com/150x150.png?text=Image+2',
          alt: ''
        },
        {
          img: 'https://via.placeholder.com/150x150.png?text=Image+2',
          alt: ''
        },
        {
          img: 'https://via.placeholder.com/150x150.png?text=Image+2',
          alt: ''
        },
        {
          img: 'https://via.placeholder.com/150x150.png?text=Image+2',
          alt: ''
        }
      ]
    }
  }
}
</script>
import '@/scss/test.scss'
