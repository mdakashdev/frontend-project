<script setup lang="ts">
import { ref } from 'vue'
import type { DateValue } from '@internationalized/date'

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

const date = ref<DateValue>()
const open = ref(false)

const fileInput = ref<HTMLInputElement | null>(null)

const openFilePicker = () => {
  fileInput.value?.click()
}
</script>
<template>
  <div class="flex flex-col gap-6 px-6 py-4">
    <div>
      <h1 class="text-xl font-semibold text-primary-text">Employee</h1>
      <p class="mt-1 text-sm text-secondary-text">Here's whats happening with your team today</p>
    </div>

    <div class="rounded-lg border bg-background p-6">
        <div class="grid grid-cols-2 gap-x-10 gap-y-6">

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Full Name <span class="text-destructive">*</span>
            </label>

            <Input
              type="text"
              placeholder="Enter full name"
              class="h-12"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Position <span class="text-destructive">*</span>
            </label>

            <Input
              type="text"
              placeholder="Enter position"
              class="h-12"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Email Address <span class="text-destructive">*</span>
            </label>

            <Input
              type="email"
              placeholder="Enter email address"
              class="h-12"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Date of Joining <span class="text-destructive">*</span>
            </label>

            <Popover v-model:open="open">
              <PopoverTrigger as-child>
                <Button
                  variant="outline"
                  class="h-12 w-full justify-between font-normal"
                >
                  <span>
                    {{ date ? date.toString() : 'Select date' }}
                  </span>

                  <CalendarIcon class="size-4" />
                </Button>
              </PopoverTrigger>

              <PopoverContent class="w-auto p-0" align="start">
                <Calendar
                  v-model="date"
                  @update:model-value="open = false"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Phone number
            </label>

            <Input
              type="text"
              placeholder="Enter phone number"
              class="h-12"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Status
            </label>

            <Select default-value="active">
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
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Deparment <span class="text-destructive">*</span>
            </label>

            <Select>
              <SelectTrigger class="!h-12 w-full">
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
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-primary-text">
              Profile Photo
            </label>

            <div class="flex items-center gap-5">

              <!-- Avatar -->
              <div class="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-muted">
                <UserRound class="size-10 text-muted-foreground" />
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
                  JPG, PNG less than 2MB
                </p>
              </div>

            </div>

            <!-- Actual file input -->
            <input
              ref="fileInput"
              type="file"
              accept="image/jpeg,image/png"
              class="hidden"
            />
          </div>

        </div>

      <div class="flex items-center justify-end gap-4 mt-15">
        <button
          type="button"
          class="h-10 rounded-md border px-6 text-sm font-medium text-primary-text hover:bg-muted"
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

    </div>

  </div>
</template>
