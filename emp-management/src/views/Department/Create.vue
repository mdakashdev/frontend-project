<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Field, useForm } from "vee-validate";
import * as z from 'zod'


const formSchema = z.object({
  dep_name: z.string()
    .min(1, 'Name is required'),
});

const { handleSubmit } = useForm(
  {
    initialValues: {
      dep_name: '',
      description: '',
      dep_head: '',
      status: ''
    },
  }
)

const submitForm = handleSubmit((values) => {
  console.log('hello', values);
})

</script>
<template>
  <div class="flex flex-col gap-6 px-6 py-4">
    <div>
      <h1 class="text-xl font-semibold text-primary-text">Add Department</h1>
      <p class="mt-1 text-sm text-secondary-text">create a new department for your organization</p>
    </div>
    <div class="rounded-lg border bg-background p-6">
      <form @submit.prevent="submitForm">
      <div class="grid grid-cols-2 gap-x-10 gap-y-6">
        <div class="flex flex-col gap-2 col-span-2">
          <label class="text-sm font-medium text-primary-text">
            Department Name <span class="text-destructive">*</span>
          </label>
          <Field name="dep_name" v-slot="{ field, errorMessage }">
            <Input
              v-bind="field"
              type="text" placeholder="name" class="h-12"
            />
            <p v-if="errorMessage" class="mt-1 text-sm text-red-500">{{ errorMessage }}</p>
          </Field>
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="text-sm font-medium text-primary-text">
            Description
          </label>
          <Field name="description" v-slot="{ field, errorMessage }">
            <Textarea
              v-bind="field"
              placeholder="Type your message here."
            />
          </Field>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-primary-text">Department Head</label>
          <Field name="dep_head" v-slot="{ componentField }">
            <Select>
              <SelectTrigger
                v-bind="componentField"
                class="!h-12 w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">
                  Apple
                </SelectItem>
                <SelectItem value="banana">
                  Banana
                </SelectItem>
                <SelectItem value="blueberry">
                  Blueberry
                </SelectItem>
                <SelectItem value="grapes">
                  Grapes
                </SelectItem>
                <SelectItem value="pineapple">
                  Pineapple
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-primary-text">Status</label>
          <Field name="status" v-slot="{ componentField }">
            <Select>
              <SelectTrigger v-bind="componentField" class="!h-12 w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">
                  Active
                </SelectItem>
                <SelectItem value="inactive">
                  Inactive
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </div>
      <div class="flex items-center justify-end gap-4 mt-15">
        <Button type="button" class="h-10 rounded-md border px-6 text-sm font-medium text-primary-text hover:bg-muted">Cancel</Button>
        <Button type="submit" class="h-10 rounded-md border px-6 text-sm font-medium bg-sidebar-active text-white hover:bg-primary/90">Save Department</Button>
      </div>
      </form>
    </div>
  </div>
</template>
<style scoped></style>
