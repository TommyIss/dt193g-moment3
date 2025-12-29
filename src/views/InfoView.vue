<template>
    <h2>Information</h2>

    <Article 
        title="Mina tankar om att arbeta med Vue." 
        text="Arbetet med Vue har varit lärorik och smidigt När jag började hade jag en ganska grundläggande bild av hur ramverket fungerar, men Vue visade sig vara lättare att komma igång än jag trodde. Dokumentationen är tydlig och själva strukturen med komponenter gjorde det enkelt att dela upp projektet i mindre samt hanterbara delar"
    />

    <Article 
        title="Vad som har gått bra"
        text="Det som fungerade bäst var just komponenttänket. Att kunna skapa små, återanvändbara delar som var och en ansvarar för sin egen logik, vilket gjorde projektet mycket mer organiserat. v-model v-if, v-for och props/emits blev snabbt naturliga att använda. Jag upplevde också att Vue är väldigt förlåtande, genom att ge snabb feedback i konsolen och det är lätt att förstå också vad som gått fel"
    />

    <Article 
        title="Utmaningar"
        text="Det som var mest utmanande var kommunikationen mellan komponenter, särskilt när jag började använda emits och props tillsammans. Det tog ett tag att förstå hur event-namn måste matcha exakt, och hur reaktivitet fungerar när man uppdaterar data. Det var en utmaning att automatiskt konvertera huvudbilden till moderna format sås AVIF och WebP, trots att jag installerade extra paket och plugin men jag har inte lyckats med detta"
    />

    <Article 
        title="Att komma igång"
        text="Det var mycket snabbt att komma igång. Installation tog några sekunder genom att mata in kommandot: npm create vue@latest. Och i projekt mappen skrivs kommandot: npm install"
    />

    <Article
        title="Om Vue är aktuellt för mig?"
        text="Vue är lätt att förstå hur saker hänger ihop, och jag gillar hur snabbt man kan bygga upp  en fungerande applikation. Det är ett intressant, modernt och logiskt ramverk som jag vill helst arbeta med i framtida projekt." 
    />
</template>

<script setup>
    import Article from '@/components/Article.vue';
</script>

<style scoped>

</style>