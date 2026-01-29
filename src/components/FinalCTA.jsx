import Button from './Button'

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of teams who already use our platform. Request a demo or start your free trial today.
        </p>
        <Button variant="secondary" className="!bg-white !text-primary hover:!bg-gray-100 !border-0">
          Request a Demo
        </Button>
      </div>
    </section>
  )
}
