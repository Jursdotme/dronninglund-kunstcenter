<template>
  <div class="relative bg-white shadow z-20">
    <div
      class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
    >
      <div class="flex-1">
        <a href="/" class="flex">
          <svg
            class="w-32"
            viewBox="0 0 95.112 23.697"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="a"
                x="0"
                y="0"
                width="1"
                height="1.001"
                color-interpolation-filters="sRGB"
              >
                <feGaussianBlur stdDeviation=".004" />
              </filter>
            </defs>
            <g transform="translate(-49.588 -40.015)" filter="url(#a)">
              <path
                d="M63.735 55.333l-14.146 3.063 1.134 5.218 16.616.07-.855-5.817-2.203-.014z"
                fill="gray"
              />
              <path
                d="M61.778 43.771l2.929 13.555 1.698.01-.206-1.398-.067-.447 2.163-.682-2.247-10.268z"
                fill="#333"
              />
              <path
                d="M68.409 55.329l-1.687.532 1.134 7.708 18.042.111-.845-5.736-16.1-.128zM86.922 55.344l-1.64.517 1.134 7.708 22.006.092v-5.734l-20.959-.11zm55.748.332l-.47 2.177-6.844.044v5.725l7.91-.047 1.134-7.377zm-7.843 2.224l-14.132.091-11.742-.062v5.734l11.998.05v-.006l13.877-.082z"
                fill="gray"
              />
              <g fill="#333">
                <g stroke-width="5.292">
                  <path
                    d="M65.599 40.015l3.78 17.274 15.596.126-.218-1.477-.065-.447 2.115-.666-2.295-10.486zM84.109 40.015l3.78 17.274 17.507.141-2.892-13.21zM102.13 40.015l3.588 16.401 12.38-12.751zm39.103 0l-15.451 3.643L137.65 56.39zM144.7 43.771l-3.847.695-2.82 12.884 3.737-.024z"
                  />
                </g>
                <path d="M137.45 57.289h-31.543L122 40.714z" />
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button
          v-click-outside="externalClick"
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          @click="toggle()"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        class="hidden md:flex-1 md:flex md:items-center md:justify-center md:space-x-12"
      >
        <nav class="flex space-x-10">
          <MenuItem
            v-for="(menuItem, index) in menuItems"
            :key="index"
            v-bind="menuItem"
          />
        </nav>
      </div>
      <div class="hidden md:flex flex-1 justify-end items-center space-x-8">
        <a
          href="#"
          class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
        >
          Sign in
        </a>
        <span class="inline-flex rounded-md shadow-sm">
          <a
            href="#"
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150"
          >
            Sign up
          </a>
        </span>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <MobileMenu :mobile-nav-is-open="mobileNavIsOpen" />
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'Navbar',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      mobileNavIsOpen: false,
      menuItems: [
        { label: 'Udstillinger', target: 'udstillinger', type: 'normal' },
        {
          label: 'Events',
          type: 'AdvancedFlyout',
          subItems: [
            {
              label: 'Koncerter',
              target: '/',
              type: 'regular',
              description:
                'Hyggelige koncertaftener i spændende omgivelser, oplev live musik for enhver smag.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
            },
            {
              label: 'Foredrag',
              target: '/',
              type: 'regular',
              description:
                'Oplev spændende foredrag fra interessante foredragsholdere og kunstnere.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>',
            },
            {
              label: 'Fernisering',
              target: '/',
              type: 'regular',
              description:
                'Åbningshøjtideligheder i forbindelse med nye udstillinger.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
            },
            {
              label: 'Kurser',
              target: '/',
              type: 'regular',
              description:
                'Udforsk dine egne kunstneriske evner inden for mange forskellige medier.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>',
            },
            {
              label: 'Kalender',
              type: 'wide',
              target: '/',
              description: 'Se alle de kommende begivenheder og events.',
              pill: 'Nyt',
            },
          ],
        },
        { label: 'Blog', target: '/blog', type: 'normal' },

        {
          label: 'Om os',
          type: 'SimpleFlyout',
          subItems: [
            {
              label: 'Ledelse',
              description:
                'Learn about tips, product updates and company culture.',
              target: '/blog',
              type: 'secondary',
            },
            {
              label: 'Historie',
              description:
                'Get all of your questions answered in our forums of contact support.',
              target: '/',
              type: 'secondary',
            },
            {
              label: 'Fondats',
              description:
                'Learn how to maximize our platform to get the most out of it.',
              target: '/',
              type: 'secondary',
            },
            {
              label: 'Sponsorer',
              description:
                'Check out webinars with experts and learn about our annual conference.',
              target: '/',
              type: 'secondary',
            },
            {
              label: 'Job',
              description: 'Understand how we take your privacy seriously.',
              target: '/',
              type: 'secondary',
            },
            {
              label: 'Venneforening',
              description: 'Understand how we take your privacy seriously.',
              target: '/',
              type: 'secondary',
            },
          ],
        },
        { label: 'Kontakt', target: '/kontakt', type: 'normal' },
      ],
    }
  },
  methods: {
    toggle() {
      this.mobileNavIsOpen = !this.mobileNavIsOpen
    },
    externalClick(event) {
      this.mobileNavIsOpen = false
    },
  },
}
</script>
