<template>
  <div class="home">
    <section class="mt-12 py-12">
      <v-container class="">
        <v-row class="my-12">
          <v-col cols="12" md="8">
            <h1 class="text-h1">
              Hello,
            </h1>
            <h1 class="text-h1">
              I am <span class="primary--text">Tianyi</span>,
            </h1>
            <h1 class="text-h1">
              a developer
            </h1>
          </v-col>
          <v-col cols="12" md="4"></v-col>
        </v-row>

        <v-row class="my-12">
          <v-col cols="12">
            <v-btn
              active-class="no-active"
              color="primary"
              x-large
              outlined
              :to="{ name: 'Home', hash: '#section--contact' }"
              >Contact</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="section--about" class="secondary py-12">
      <v-container>
        <h2 class="text-h3 my-8">
          About <span class="primary--text">Me</span>
        </h2>
        <p class="text-body2">
          I am a software developer, a soccer fan, a video gamer, and a dog
          lover. I have 2 beautiful shibas, Luka and Mika. They are extremely
          friendly and are both very good boys. I love science and technology,
          and went to college for an engineering degree. After college, I fell
          in love with Javascript and web technologies during my first job. I
          loved how it just makes sense, I loved how helpful toolings can be, I
          loved how unique yet useful it is.
        </p>

        <p class="text-body2">
          Started out mostly with frontend, during my 3 professional years in
          the industry I quickly realize I can basically do anything, from
          backend, to frontend, to deployment and operation. I realize the more
          I learn, the more I need to learn, and learning all these new
          technologies just make me a better developer and a better engineer.
        </p>

        <p class="text-body2">
          I love Vue, but I also like React. For Vue, I love its elegancy and
          flexibility. The syntax sugar sometimes make me forget I am writing
          javascript. The entire ecosystem of Vue allows me to make my apps
          effortlessly, with understanding how exactly the framework works from
          top to bottom, I can not only achieve anything I want, but also make
          them pretty and performant. For React, although syntactically
          different, they are really the same. I like how writing React feels
          more down to the earth, it feels like it almost is writing vanilla
          javascript but with all its power and great toolings.
        </p>

        <p class="text-body2">
          I am currently pursuing a graduate degree and looking for a new
          challenge to take on. Although a lot of my background is in web
          development, I am extremely open to other areas!
        </p>
      </v-container>
    </section>

    <section id="section--portfolio" class="py-12">
      <v-container>
        <h2 class="text-h3 mt-8 mb-10">
          <span class="primary--text">My</span> Portfolio
        </h2>

        <portfolio-item
          :image="mstarLogo"
          link="https://www.morningstar.com/"
          title="Morningstar Inc."
          time="2016-2019"
        >
          I worked for Morningstar from 2016 to 2019 on several products, mainly
          <span class="font-italic">www.morningstar.com</span> and
          <span class="font-italic">direct.morningstar.com</span>. I worked on
          different graphical components for better visualization of data, home
          page layouts, ads performances, and the complete rehaul of
          <span class="font-italic">morningstar.com</span>. On top of that I
          participated in the project of
          <span class="font-italic">direct.morningstar.com</span>, moving a
          platform application completely to cloud, and reengineered first
          version of the backend to improve bundle sizing and maintainability of
          the code. Some notable projects include the design of data table,
          standarize internal charting tools, and new login workflow for direct.
        </portfolio-item>

        <portfolio-item
          :image="cleanLogo"
          link="https://cleaningwithcooley.com/"
          title="Cleaning With Cooley"
          time="2019-Now"
        >
          The project I have been working on individually with the owner of the
          business is a material-design-based responsive Vue application hosted
          serverlessly on AWS. Using services like lambda, gateway, S3, dynamo,
          cloudfront, cognito, and amplify.js, the application has an entire
          secure login flow for customers and allows the business owner to
          easily showcase and manage her business effortlessly with minimum
          maintainaince fee.
        </portfolio-item>

        <portfolio-item
          link="http://cs571.hw8.htymm.com.s3-website-us-west-1.amazonaws.com/"
          :image="uscLogo"
          title="The News App"
          time="2020"
        >
          The application is hosted serverlessly on AWS built with React for web
          and another version for iOS. The application allows users to search
          for news articles from both New York Times and The Guardian, and shows
          headlines from both sources. Users can share liked articles through
          social media with others and can tag sources they liked so can be
          accessed more conveniently through a different tab.
        </portfolio-item>

        <portfolio-item
          :image="maskLogo"
          link="https://apkpure.com/the-death-mask/com.MarianaCacique.TheDeathMask"
          title="The Death Mask"
          time="2019-2020"
        >
          The project is an Android game built with Unity. It is a story-driven
          detective game with an interesting mechanics and a great story. I
          worked with the project owner on the technical part of the game,
          making tools to allow her to build the game with ease, and features
          the game requires. On top of that I act as the subject matter expert
          when designing the codebase for a better maintainability.
        </portfolio-item>

        <portfolio-item
          link="http://rabbound.s3-website-us-west-1.amazonaws.com"
          :image="rabLogo"
          title="Rabbound"
          time="2019"
        >
          A game jam project completed in a weekend by a group of 6. It is a
          single player platform game built with Unity. In the game, players
          with play as a bunny jumping from one planet to the other, and planets
          can have different effect on the player. Players' goal is to navigate
          the bunny to the destination planet to save other bunnies. It is fun
          and cute, but can be challenging at the same time with all mechanics
          in the game.
        </portfolio-item>
      </v-container>
    </section>

    <section class="secondary py-12">
      <v-container>
        <h2 class="text-h3 my-8">
          <span class="primary--text">My</span> Education
        </h2>

        <education-item></education-item>

        <education-item>
          <template v-slot:title
            >University of Illinois - Urbana, Champaign</template
          >
          <template v-slot:subtitle
            >Electrical Engineering, Statistics - 2012-2016</template
          >
          <h5 class="text-h6">Courses &amp; Interests</h5>
          <ul>
            <li class="text-body-2">Digital Signal Processing</li>
            <li class="text-body-2">Multimedia Signal Processing</li>
            <li class="text-body-2">Machine Learning</li>
            <li class="text-body-2">Stochastic Process</li>
          </ul>
        </education-item>
      </v-container>
    </section>

    <section id="section--contact" class="secondary pb-12">
      <v-container>
        <div class="d-flex justify-center mt-16">
          <v-btn :href="gitLink" x-large dark icon class="mx-4">
            <v-icon link dark x-large>mdi-github</v-icon>
          </v-btn>

          <v-btn :href="linkedinLink" x-large dark icon class="mx-4"
            ><v-icon link dark x-large>mdi-linkedin</v-icon></v-btn
          >

          <v-btn :href="emailLink" x-large dark icon class="mx-4"
            ><v-icon link dark x-large>mdi-email</v-icon></v-btn
          >
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioItem from '@/components/PortfolioItem'
import EducationItem from '@/components/EducationItem'

import MstarLogo from '@/assets/mstar_logo.jpg'
import CleanLogo from '@/assets/cwc_logo.png'
import RabLogo from '@/assets/rab_logo.png'
import MaskLogo from '@/assets/tdm_logo.png'
import UscLogo from '@/assets/usc_logo.png'

export default {
  name: 'Home',
  components: {
    PortfolioItem,
    EducationItem
  },
  data: () => ({
    cleanLogo: CleanLogo,
    mstarLogo: MstarLogo,
    rabLogo: RabLogo,
    maskLogo: MaskLogo,
    uscLogo: UscLogo,
    gitLink: 'https://github.com/tyhe12',
    linkedinLink: 'https://www.linkedin.com/in/tianyi-he-b43310aa/',
    emailLink: 'mailto:htycm1@gmail.com'
  })
}
</script>

<style lang="scss"></style>
