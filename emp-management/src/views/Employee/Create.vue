<script setup lang="ts">
import { ref } from 'vue'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
// import type { DateValue } from '@internationalized/date'
import { Field, useForm } from 'vee-validate'

import {
  Calendar as CalendarIcon,
  UserRound,
  Upload
} from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEmployeeStore } from '@/stores/employee'

const employeeStore = useEmployeeStore();

// const date = ref<DateValue>()
const date = ref()
const open = ref(false)

const fileInput = ref<HTMLInputElement | null>(null)


const profilePhotoPreview = ref<string | null>(null)

const handleProfilePhoto = (
  event: Event,
  handleChange: (value: File | undefined) => void
) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  handleChange(file)

  if (file) {
    profilePhotoPreview.value = URL.createObjectURL(file)
  } else {
    profilePhotoPreview.value = null
  }
}




const openFilePicker = () => {
  fileInput.value?.click()
}

const formSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
    email: z.string()
  .min(1, 'Email is required')
  .email('Enter a valid email'),
  position: z.string().min(1, 'Position is required'),
  department: z.string().min(1, 'Department is required'),
  joinDate: z.any().refine(
  (value) =>
    value !== undefined && value !== null,
  'Date of joining is required'
),
  profilePhoto: z.any()
  .optional()
  .refine(
    (file) =>
      !file || ['image/jpeg', 'image/png'].includes(file.type),
    'Only JPG and PNG images are allowed'
  )
  .refine(
    (file) =>
      !file || file.size <= 1 * 1024 * 1024,
    'Image must be less than 1MB'
  ),
  status: z.enum(['active', 'inactive']),
  phone: z.string().optional(),
});

type EmployeeForm = z.infer<typeof formSchema>;

const schema = toTypedSchema(formSchema);

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    fullName: '',
    email: '',
    position: '',
    department: '',
    joinDate: undefined,
    status: 'active',
  },
})

const submitForm = handleSubmit((values) => {
  const employee = {
    id: Date.now(),
    name: values.fullName,
    position: values.position,
    email: values.email,
    department: values.department,
    joinDate: values.joinDate,
    status: values.status,
    phone: values.phone,
    profilePhoto: values.profilePhoto,
  }
  console.log('employee:', employee)
  employeeStore.addEmployee(employee);

  resetForm()
  profilePhotoPreview.value = null
  date.value = undefined
})


</script>
<template>
  <div class="flex flex-col gap-6 px-6 py-4">
    <div>
      <h1 class="text-xl font-semibold text-primary-text">Employee</h1>
      <p class="mt-1 text-sm text-secondary-text">Here's whats happening with your team today</p>
    </div>
    <div class="rounded-lg border bg-background p-6">
      <div v-for="employee in employeeStore.employees" :key="employee.id">
        {{ employee }}
      </div>

      <form @submit.prevent="submitForm">
      <div class="grid grid-cols-2 gap-x-10 gap-y-6">

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Full Name <span class="text-destructive">*</span>
            </label>

            <Field name="fullName" v-slot="{ field, errorMessage }">
              <Input
                  v-bind="field"
                  type="text"
                  placeholder="Enter full name"
                  class="h-12"
                  :class="{
                    'border-red-500 focus-visible:ring-red-500': errorMessage
                  }"
                />
              <p v-if="errorMessage" class="mt-1 text-sm text-red-500">
                {{ errorMessage }}
              </p>
            </Field>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Position <span class="text-destructive">*</span>
            </label>

            <Field name="position" v-slot="{ field, errorMessage }">
              <Input
                v-bind="field"
                type="text"
                placeholder="Enter position"
                class="h-12"
                :class="{
                    'border-red-500 focus-visible:ring-red-500': errorMessage
                  }"
              />
              <p v-if="errorMessage" class="mt-1 text-sm text-red-500">
                {{ errorMessage }}
              </p>
            </Field>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Email Address <span class="text-destructive">*</span>
            </label>
            <Field name="email" v-slot="{ field, errorMessage }">
              <Input
                v-bind="field"
                type="email"
                placeholder="Enter email address"
                class="h-12"
                :class="{
                    'border-red-500 focus-visible:ring-red-500': errorMessage
                  }"
              />
              <p v-if="errorMessage" class="mt-1 text-sm text-red-500">
                {{ errorMessage }}
              </p>
            </Field>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Date of Joining <span class="text-destructive">*</span>
            </label>

            <Field name="joinDate" v-slot="{ value, handleChange, errorMessage }">
              <Popover v-model:open="open">
                <PopoverTrigger as-child>
                  <Button
                    variant="outline"
                    class="h-12 w-full justify-between font-normal"
                    :class="{
                      'border-red-500 focus:ring-red-500': errorMessage
                    }"
                  >
                  <span>
                    {{ value ? value.toString() : 'Select date' }}
                  </span>

                    <CalendarIcon class="size-4" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent class="w-auto p-0" align="start">
                  <Calendar
                    v-model="date"
                    @update:model-value="(newDate) => {
                      handleChange(newDate)
                      open = false
                    }"
                  />
                </PopoverContent>
              </Popover>
              <p v-if="errorMessage" class="mt-1 text-sm text-red-500">
                {{ errorMessage }}
              </p>
            </Field>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Phone number
            </label>
            <Field name="phone" v-slot="{ field }">
              <Input
                v-bind="field"
                type="text"
                placeholder="Enter phone number"
                class="h-12"
              />
            </Field>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Status
            </label>

            <Field name="status" v-slot="{ componentField }">
              <Select v-bind="componentField" default-value="active">
                <SelectTrigger class="!h-12 w-full">
                  <SelectValue />
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

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Deparment <span class="text-destructive">*</span>
            </label>

            <Field name="department" v-slot="{ componentField, errorMessage }">
              <Select v-bind="componentField">
                <SelectTrigger
                  class="!h-12 w-full"
                  :class="{
                    'border-red-500 focus:ring-red-500': errorMessage
                  }"
                >
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="engineering">
                    Engineering
                  </SelectItem>

                  <SelectItem value="marketing">
                    Marketing
                  </SelectItem>

                  <SelectItem value="design">
                    Design
                  </SelectItem>

                  <SelectItem value="sales">
                    Sales
                  </SelectItem>

                  <SelectItem value="hr">
                    HR
                  </SelectItem>
                </SelectContent>
              </Select>
              <p v-if="errorMessage" class="text-sm text-red-500">
                {{ errorMessage }}
              </p>
            </Field>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Profile Photo
            </label>

            <div class="flex items-center gap-5">

              <!-- Avatar -->
              <div class="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-muted">
                <img
                  v-if="profilePhotoPreview"
                  :src="profilePhotoPreview"
                  alt="Profile preview"
                  class="h-full w-full object-cover"
                />

                <UserRound
                  v-else
                  class="size-10 text-muted-foreground"
                />
              </div>

              <!-- Upload -->
              <div class="flex flex-col gap-2">
                <button
                  type="button"
                  class="flex h-9 items-center gap-2 text-primary-akash rounded-md border px-4 text-sm font-medium hover:bg-muted"
                  @click="openFilePicker"
                >
                  <Upload class="size-4" />
                  Upload photo
                </button>

                <p class="text-xs text-muted-foreground">
                  JPG, PNG less than 1MB
                </p>
              </div>

            </div>

            <!-- Actual file input -->
            <Field name="profilePhoto" v-slot="{ handleChange, errorMessage }">
              <input
                ref="fileInput"
                type="file"
                accept="image/jpeg,image/png"
                class="hidden"
                @change="(event) => handleProfilePhoto(event, handleChange)"
              />
              <p v-if="errorMessage" class="mt-1 text-sm text-red-500">
                {{ errorMessage }}
              </p>
            </Field>
          </div>

        </div>

      <div class="flex items-center justify-end gap-4 mt-15">
        <button
          type="button"
          class="h-10 rounded-md border px-6 text-sm font-medium text-primary-text hover:bg-muted"
          @click="resetForm(); profilePhotoPreview = null; date = undefined"
        >
          Cancel
        </button>

        <button
          type="submit"
          class="h-10 rounded-md border px-6 text-sm font-medium bg-sidebar-active text-white hover:bg-primary/90"
        >
          Save Employee
        </button>
      </div>
      </form>
    </div>
  </div>
</template>
