import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'swift-cta',
  imports: [],
  template: `
    <section
      class="py-20 bg-gradient-to-r from-[#390546] to-[#c73d6c] text-white"
    >
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-[1.8rem] leading-[2.2rem] font-bold mb-6">
          Ready to Transform Your Business Communication?
        </h2>
        <p class="text-[1.1rem] leading-[1.8rem] max-w-2xl mx-auto mb-8">
          Join thousands of businesses already enjoying faster, more reliable
          SMS communication.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+233553157022"
            class="bg-white text-[#390546] hover:bg-[#ffdce8] px-8 py-4 rounded-md font-bold text-[1.1rem] transition-colors"
          >
            Request a Demo
          </a>
          <a
            href="tel:+233553157022"
            class="border-2 border-white hover:bg-white hover:text-[#390546] px-8 py-4 rounded-md font-bold text-[1.1rem] transition-colors"
          >
            Get Pricing Details
          </a>
          <a
            href="tel:+233553157022"
            class="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-[#390546] px-8 py-4 rounded-md font-bold text-[1.1rem] transition-colors"
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
            Call Our Experts
          </a>
        </div>
        <p class="mt-8 text-[0.9rem] text-[#de8dad]">
          Have questions?
          <a href="tel:+233553157022" class="underline hover:text-white"
            >Contact our team</a
          >
          for personalized assistance.
        </p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cta {}
