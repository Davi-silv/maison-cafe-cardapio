import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="container-maison flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-caramel">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl text-espresso">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-sm text-espresso/60">
        O caminho que você tentou acessar não existe neste cardápio digital.
      </p>
      <Button to="/" variant="secondary" className="mt-8">
        Voltar ao início
      </Button>
    </div>
  )
}
