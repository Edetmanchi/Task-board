<template>
    <div>
        <header class=" flex flex-row shadow-sm bg-black">
            <Nav />
        </header>
    
        <div class="container mx-auto p-4">
            <slot />
        </div>
        

    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'nav'
    })
</script>
