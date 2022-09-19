<script>
import PreviewCard from './lib/PreviewCard.svelte'
import Calculadora from './lib/Calculadora.svelte'
import Cronometro from './lib/Cronometro.svelte'
</script>

<main style="font-family: 'Roboto',sans-serif" class='text-zinc-800 w-[90%] mx-auto py-4'>
<div class='flex flex-wrap items-center justify-center xs:justify-start sm:px-[5%] md:px-0 md:justify-start w-[inheret]'>
   <PreviewCard/>
   <Calculadora/>
   <Cronometro/>
   <div class='w-full ss_:w-[90%] xs:w-[50%] md:w-1/3 lg:w-1/4 h-48 bg-zinc-50 flex items-center justify-center'>
      <div class='bg-pink-500 w-[92%] h-[90%] flex items-center justify-center'>1</div>
   </div>
   <div class='w-full ss_:w-[90%] xs:w-[50%] md:w-1/3 lg:w-1/4 h-48 bg-zinc-50 flex items-center justify-center'>
      <div class='bg-pink-500 w-[92%] h-[90%] flex items-center justify-center'>1</div>
   </div>
   <div class='w-full ss_:w-[90%] xs:w-[50%] md:w-1/3 lg:w-1/4 h-48 bg-zinc-50 flex items-center justify-center'>
      <div class='bg-pink-500 w-[92%] h-[90%] flex items-center justify-center'>1</div>
   </div>
   <div class='w-full ss_:w-[90%] xs:w-[50%] md:w-1/3 lg:w-1/4 h-48 bg-zinc-50 flex items-center justify-center'>
      <div class='bg-pink-500 w-[92%] h-[90%] flex items-center justify-center'>1</div>
   </div>
</div>
</main>