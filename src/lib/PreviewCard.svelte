<script>
   import { fade } from 'svelte/transition'
   const imagen = 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
   const title = 'PreviewCard'
   let modal = true
</script>
<div on:click={ ()=> modal = true } class='w-full ss_:w-[90%] xs:w-[50%] md:w-1/3 lg:w-1/4 h-48 bg-zinc-50 flex items-center justify-center'>
   <div class='bg-sky-500 w-[92%] h-[90%] flex items-center justify-center text-2xl font-medium text-sky-900 cursor-pointer'>{ title }</div>
</div>
<!-- modal start -->
{#if modal}
<div transition:fade class='{ modal ? 'block':'hidden'} absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-[#F3EAE3] select-none'>
   <div on:click={ ()=> modal = false } class='fixed top-4 right-4 w-7 h-7 rounded cursor-pointer flex items-center justify-center bg-red-600 hover:bg-red-500 transtion-[background] duration-[400ms]'>
      <i class='pt-0.5 pr-0.5 bx bx-x text-3xl text-red-900 font-bold'></i>
   </div>
   <div class='w-96 md:w-full flex items-center justify-center'>
      <div class='md:h-[450px] rounded-xl overflow-hidden md:flex md:justify-center'>
         <figure class='w-full md:w-80 h-48 md:h-full overflow-hidden bg-red-500'>
            <img src="{imagen}" alt='colonia' class='md:h-full object-cover object-center'>
         </figure>
         <div class='md:w-80 bg-zinc-50'>
            <section class='px-7 pt-7 flex flex-col gap-y-3'>
               <h2 class='tracking-[0.5em] uppercase text-xs'>perfume</h2>
               <h1 class='text-4xl font-semibold capitalize'>gabrielle essence eau de parfum</h1>
               <p class='text-[1.09em]'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creator for the House of CHANEL.</p>
            </section>
            <div class='px-7 pt-6 pb-7 flex flex-col gap-y-3'>
               <section class='flex items-center gap-x-4'>
                  <div class='text-4xl text-green-700 font-bold tracking-tight'>$149.99</div>
                  <div class='line-through'>$169.99</div>
               </section>
               <section>
                  <button class='outline-none bg-green-700 hover:bg-green-600 w-full rounded-md py-3 text-zinc-50 flex items-center justify-center gap-x-3 transition-[background]'>
                     <i class='bx bx-cart-alt text-lg font-medium'></i>
                     <span class='font-semibold'>Add to Cart</span>
                  </button>
               </section>
            </div>
         </div>
      </div>
   </div>
</div>
{/if}
<!-- end -->