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
</div>
</main>