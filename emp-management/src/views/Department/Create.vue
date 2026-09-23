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
</script>
<template>
  <div class="flex flex-col gap-6 px-6 py-4">
    <div>
      <h1 class="text-xl font-semibold text-primary-text">Add Department</h1>
      <p class="mt-1 text-sm text-secondary-text">create a new department for your organization</p>
    </div>
    <div class="rounded-lg border bg-background p-6">
      <div class="grid grid-cols-2 gap-x-10 gap-y-6">
        <div class="flex flex-col gap-2 col-span-2">
          <label class="text-sm font-medium text-primary-text">
            Department Name <span class="text-destructive">*</span>
          </label>
          <Input type="text" placeholder="name" class="h-12" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="text-sm font-medium text-primary-text">
            Description
          </label>
          <Textarea placeholder="Type your message here." />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-primary-text">Department Head</label>
          <Select>
            <SelectTrigger class="!h-12 w-full">
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
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-primary-text">Status</label>
          <Select>
            <SelectTrigger class="!h-12 w-full">
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
        </div>
      </div>
      <div class="flex items-center justify-end gap-4 mt-15">
        <Button type="button" class="h-10 rounded-md border px-6 text-sm font-medium text-primary-text hover:bg-muted">Cancel</Button>
        <Button type="button" class="h-10 rounded-md border px-6 text-sm font-medium bg-sidebar-active text-white hover:bg-primary/90">Save Department</Button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
