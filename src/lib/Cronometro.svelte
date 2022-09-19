<script>
   import { fade } from 'svelte/transition'
   const imagen = 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
   const title = 'Cronometro'
   let modal = false
</script>
<div on:click={ ()=> modal = true } class='w-full ss_:w-[90%] xs:w-[50%] md:w-1/3 lg:w-1/4 h-48 bg-zinc-50 flex items-center justify-center'>
   <div class='bg-sky-500 w-[92%] h-[90%] flex items-center justify-center text-2xl font-medium text-sky-900 cursor-pointer'>{ title }</div>
</div>
<!-- modal start -->
{#if modal}
<div transition:fade on:click={ ()=> modal = false } class='{ modal ? 'block':'hidden'} fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-zinc-800 bg-opacity-90 cursor-pointer'>
   <h1 class='text-4xl text-zinc-50 font-bold'>Modal Cronometro</h1>
</div>
{/if}
<!-- end -->