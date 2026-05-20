import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const [visible, setVisible] = useState(false)

  // Trigger zoom-in on mount
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
  }, [])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [images.length, onClose])

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Left arrow */}
      {images.length > 1 && (
        <button
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25"
          onClick={(e) => { e.stopPropagation(); prev() }}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Image + caption — stopPropagation prevents overlay click-to-close */}
      <div
        className={`flex flex-col items-center gap-4 px-16 transition-all duration-200 ${
          visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].caption}
          className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        />
        <p className="text-center text-sm font-medium text-white/75">
          {images[index].caption}
        </p>
        {images.length > 1 && (
          <p className="text-xs text-white/40">
            {index + 1} / {images.length}
          </p>
        )}
      </div>

      {/* Right arrow */}
      {images.length > 1 && (
        <button
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25"
          onClick={(e) => { e.stopPropagation(); next() }}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  )
}
