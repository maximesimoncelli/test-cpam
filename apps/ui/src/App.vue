<script setup lang="ts">
import { pattatras } from '@pattatras/pattatras';
import { shuffledRangeOfNumber } from '@pattatras/use-cases/1-6457';
import { computed, ref } from 'vue';


let computedArrayForPattatras = ref<Array<{
  number: number;
  message: string | number;
}> | null>(null);

const executePattatras = () => {
  computedArrayForPattatras.value = pattatras(shuffledRangeOfNumber());
}

const helpText = [
  "If the number is a multiple of 3, it shows the message 'Patte'.",
  "If the number is a multiple of 5, it shows the message 'Tatras'.",
  "If the number is both a multiple of 5 and 3, it shows the message 'Pattatras'.",
  "In every other case, it shows the the number."
]

const buttonText = computed(() => {
  if (!computedArrayForPattatras.value) {
    return "Start the Pattatras Application"
  } else {
    return "Restart the Pattatras Application"
  }
})
</script>

<template>
  <div class="mx-auto w-12/12 md:w-8/12 lg:w-160 flex flex-col gap-6">
    <h1 class="text-2xl font-bold text-teal-800">Pattatras</h1>
    <Button raised @click="executePattatras">{{
      buttonText }}</button>
    <main>
      <Accordion class="mb-6">
        <AccordionPanel value="0">
          <AccordionHeader>How to use Pattatras?</AccordionHeader>
          <AccordionContent>
            <p class="mb-2">You can click on the <span class="font-bold">"Start the Pattatras Application"</span> button
              above
              to show a table of all numbers and
              their associated
              message.</p>
            <p class="mb-2">The <span class="font-bold">"Number"</span> column is sortable.</p>
            <span>Rules:</span>
            <ul class="list-disc list-inside">
              <li class="text-sm text-black" v-for="(paragraph, index) in helpText" :key="index">{{ paragraph }}</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <div v-if="computedArrayForPattatras">
        <DataTable scrollable :value="computedArrayForPattatras" stripedRows paginator removableSort :rows="50"
          :rowsPerPageOptions="[50, 100, 500]" scrollHeight="650px">
          <Column field="number" header="Number" sortable></Column>
          <Column field="message" header="message"></Column>
        </DataTable>
      </div>
    </main>

  </div>

</template>

<style scoped></style>
