<template>
        <header>
        <!-- Logo -->
        <h1 id="logo"><RouterLink to="/">Startsida</RouterLink></h1>
        <!-- Menyknapp för att öppna navigeringsmeny i mobil läge  -->
        <button class="menu-btn open" id="open-menu" @click="toggleMenu" ref="openBtnRef">
            <span class="menu-icon">
                <span class="bars"></span>
                <span class="bars"></span>
                <span class="bars"></span>
            </span>
            <span class="menu-text">Meny</span>
        </button>
        <!-- Navigeringsmeny -->
        <nav id="nav-menu" :style="{display: menuDisplay}" ref="menuRef">
            <!-- Knapp som visas när mobilmenyn är utfälld -->
            <button class="menu-btn close" id="close-menu" @click="toggleMenu">
                <span class="meny-icon">
                    <span class="bars cross1"></span>
                    <span class="bars cross2"></span>
                </span>
                <span class="menu-text">Stäng</span>
            </button> 
            <ul class="nav-list">
                <li><RouterLink to="/">Startsida</RouterLink></li>
                <li><RouterLink to="/movies">Filmer</RouterLink></li>
                <li><RouterLink to="/info">Information</RouterLink></li>
            </ul>
        </nav>
    </header>
    
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { RouterLink } from 'vue-router';

    let menuDisplay = ref('none');
    let menuRef = ref(null);
    let openBtnRef = ref(null);

    onMounted(() => {
        let mediaQuery = window.matchMedia('(max-width: 800px)');
        
        // Funktion som kontrollerar om det mindre eller större skärm
        let screenControll = (event) => {
            if(event.matches) {
                menuDisplay.value = 'none';
            } else {
                menuDisplay.value = 'block';
            }
        } 

        screenControll(mediaQuery);
        
        mediaQuery.addEventListener('change', screenControll);
        
        // Funktion om man trycker utanför menyn
        let clickOutside = (event) => {
            if(
                menuDisplay.value === 'block' && 
                menuRef.value && 
                !menuRef.value.contains(event.target) &&
                (!openBtnRef.value || !openBtnRef.value.contains(event.target) && 
                window.innerWidth <= 800
            )
            ) {
                menuDisplay.value = 'none';
            }
    
        }

        document.addEventListener('click', clickOutside);

    });

    let toggleMenu = () => {
        menuDisplay.value = menuDisplay.value === 'none' ? 'block': 'none';
    }
</script>

<style scoped>
    /* Header-sektion */
header {
    margin-top: 0;
    background-color: #16476A;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}

/* Logo */
#logo {
    color: var(--Vit, #FFF);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2em;
    font-style: normal;
    font-weight: 700;   
    white-space: nowrap; 
}

/* Navigerinsmeny */
#nav-menu {
    margin: 0 4%;
}
.nav-list {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}

.nav-list > li {
    color: #FFF;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.2em;
    font-style: normal;
    font-weight: 400;
    padding: 0 4%;
    white-space: nowrap;
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: #00AEFF;
    text-decoration: underline;
}

.router-link-active{
    color: #FDB5CE;
    text-decoration: underline;
}

/* Dölja meny knappar i desktopläge */
.menu-btn {
    display: none;
}

@media screen and (max-width: 800px) {
    /* Navigeringsmeny i mobilläge */
    #nav-menu{
        position: absolute;
        right: 0;
        top: 0;
        background-color: #16476A;
        width: 75%;
        margin: 0;
    }
    .nav-list{
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
        margin: 0 auto;
        padding: 5% 0;
        height: 100%;
        background-color: #16476A;
    }
    .nav-list > li {
        padding: 0.8em 0;
        width: 100%;
    }
    /* Öppen knapp */
    .open {
        display: block;
        position: absolute;
        right: 1%;
        top: 1%;
        padding: 0;
    }
    .menu-btn {
        justify-self: flex-end;
        flex-direction: column;
        display: flex;
        align-items: center;
        padding: 1%;
        background-color: #FDB5CE;
        border: white solid 1px;
        cursor: pointer;
    }
    .bars {
        display: block;
        width: 20px;
        height: 3px;
        background-color: #16476A;
        margin: 5px 0;
    }
    .menu-btn:hover {
        background-color: #00AEFF;
    }
    .menu-text {
        color: #16476A;
        margin: 1%;
        font-weight: 700;
    }
    /* Stängknapp */
    .close {
        margin: 1em 1.5em;
        right: 2%;
        top: 2%;
    }
    .cross1 {
        width: 25px;
        transform: rotate(45deg);
        position: relative;
        top: 5px;
    }
    .cross2 {
        width: 25px;
        transform: rotate(135deg);
        position: relative;
        top: -3px;
    }
}
</style>