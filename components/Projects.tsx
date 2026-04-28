import React, { useEffect, useState } from 'react'
import { BsGithub } from "react-icons/bs";
import { MdClose, MdOutlineLink, MdZoomIn, MdZoomOut } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";


export default function Projects({ project }) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const initials = project.name
    .replace(/\([^)]*\)/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  useEffect(() => {
    if (!isImageOpen) return;

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsImageOpen(false);
      if (event.key === '+') setZoom((currentZoom) => Math.min(currentZoom + 0.25, 3));
      if (event.key === '-') setZoom((currentZoom) => Math.max(currentZoom - 0.25, 0.5));
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isImageOpen]);

  function closeImageViewer() {
    setIsImageOpen(false);
    setZoom(1);
  }

  return (
    <>
      <div className="w-full rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              aria-label={`Open ${project.name} image`}
              className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 shadow-sm transition hover:scale-[1.02] hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-950"
              onClick={() => project.coverURL && setIsImageOpen(true)}
            >
              {project.coverURL ? (
                <Image
                  src={project.coverURL}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  quality={60}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-200">
                  {initials}
                </div>
              )}
            </button>
          <div className="min-w-0">
            <h2 className="text-base font-bold capitalize leading-snug text-neutral-900 dark:text-neutral-100">
              {project.name}
            </h2>
            <p className="mt-1 text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
              {project.category || 'Project'}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {project.githubURL && (
            <Link href={project.githubURL} passHref>
              <a
                title="Source Code on GitHub"
                target="_blank"
                rel="noopener noreferrer"
                href={project.githubURL}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-gray-300 hover:bg-gray-50 hover:text-black dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <BsGithub className="h-5 w-5" />
              </a>
            </Link>
          )}

          {project.previewURL && (
            <Link href={project.previewURL} passHref>
              <a
                title="Live Preview"
                target="_blank"
                rel="noopener noreferrer"
                href={project.previewURL}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-gray-300 hover:bg-gray-50 hover:text-black dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <MdOutlineLink className="h-5 w-5" />
              </a>
            </Link>
          )}
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col justify-start gap-3">
        <p className="text-sm leading-5 text-gray-600 dark:text-neutral-300">
          {project.description}
        </p>

        <div className="flex items-center gap-1.5 flex-wrap">
          {project.tools.map((tool, index) => {
            return (
              <span
                key={`${tool}-${index}`}
                className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              >
                {tool}
              </span>
            );
          })}
        </div>
      </div>
      </div>

      {isImageOpen && project.coverURL && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} image viewer`}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out"
            aria-label="Close image viewer"
            onClick={closeImageViewer}
          />
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col rounded-lg bg-white shadow-2xl dark:bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
              <h3 className="min-w-0 truncate text-sm font-semibold text-gray-900 dark:text-gray-100">
                {project.name}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  title="Zoom out"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => setZoom((currentZoom) => Math.max(currentZoom - 0.25, 0.5))}
                >
                  <MdZoomOut className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  title="Reset zoom"
                  className="h-9 min-w-[56px] rounded-md border border-gray-200 px-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => setZoom(1)}
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  type="button"
                  title="Zoom in"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => setZoom((currentZoom) => Math.min(currentZoom + 0.25, 3))}
                >
                  <MdZoomIn className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  title="Close"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={closeImageViewer}
                >
                  <MdClose className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="max-h-[calc(90vh-64px)] overflow-auto bg-gray-50 p-4 dark:bg-gray-950">
              <div
                className="relative mx-auto transition-transform"
                style={{
                  width: `${Math.round(900 * zoom)}px`,
                  maxWidth: zoom === 1 ? '100%' : 'none',
                }}
              >
                <Image
                  src={project.coverURL}
                  alt={project.name}
                  width={1200}
                  height={630}
                  layout="responsive"
                  objectFit="contain"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
