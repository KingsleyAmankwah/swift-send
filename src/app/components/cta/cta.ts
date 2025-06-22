import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'swift-cta',
  imports: [],
  template: `
    <section
      class="py-20 bg-gradient-to-r from-[#390546] to-[#c73d6c] text-white"
    >
      <div class="container mx-auto px-4 text-center">
        <h2 class="mb-6">Ready to Transform Your Business Communication?</h2>
        <p class="max-w-2xl mx-auto mb-8">
          Join thousands of businesses already enjoying faster, more reliable
          SMS communication.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+233553157022"
            class="flex items-center gap-2 px-4 py-4 rounded-md bg-white text-[#390546] hover:bg-[#ffdce8] text-lg font-sans  transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +233 (553) 157-022
          </a>
          <a
            href="tel:+233553157022"
            class="border-2 border-white hover:bg-white hover:text-[#390546] px-8 py-4 rounded-md font-bold text-H600 transition-colors"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cta {}
