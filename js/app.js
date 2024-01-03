gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2,
    effects: true
})

gsap.fromTo('.watch__content', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.watch__content',
        start: 'center',
        end: '1000',
        scrub: true
    }
})


let itemsL = gsap.utils.toArray('.models__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-1000',
				end: '-100',
				scrub: true
			}
		})
	})