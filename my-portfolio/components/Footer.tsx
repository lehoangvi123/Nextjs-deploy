export function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© {new Date().getFullYear()} Lê Hoàng Vĩ. All rights reserved.</p>
      <p>
        Email: <a href="mailto:lehoangvi.work@gmail.com" className="underline">lehoangvi.work@gmail.com</a> | Phone: 0824318868
      </p>
    </footer>
  );
}