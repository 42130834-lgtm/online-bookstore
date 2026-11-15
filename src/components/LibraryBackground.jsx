import libraryBg from '../assets/library-bg.avif'

export default function LibraryBackground({ image = libraryBg }) {
  return <div className="library-bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
}
