import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'swift-cta',
  imports: [],
  template: `
    <section
      class="py-20 bg-gradient-to-r from-[#390546] to-[#c73d6c] text-white"
    >
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-H800 mb-6">
          Ready to Transform Your Business Communication?
        </h2>
        <p class="text-P300 max-w-2xl mx-auto mb-8">
          Join thousands of businesses already enjoying faster, more reliable
          SMS communication.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button
            class="bg-white text-[#390546] hover:bg-[#ffdce8] px-8 py-4 rounded-md font-bold text-H600 transition-colors"
          >
            Start Your Free Trial
          </button>
          <button
            class="border-2 border-white hover:bg-white hover:text-[#390546] px-8 py-4 rounded-md font-bold text-H600 transition-colors"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cta {}
