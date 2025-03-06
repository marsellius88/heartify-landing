export default function Footer() {
  return (
    <footer className="px-20 pt-20">
      <div className="py-5 border-y-1 border-stone-200">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem totam
          laborum exercitationem similique tempore porro? Nobis non incidunt
          officia ullam laborum ipsum? Id suscipit pariatur animi, perspiciatis
          in cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non rem totam laborum exercitationem similique tempore porro? Nobis
          non incidunt officia ullam laborum ipsum? Id suscipit pariatur animi,
          perspiciatis in cumque!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem totam
          laborum exercitationem similique tempore porro? Nobis non incidunt
          officia ullam laborum ipsum? Id suscipit pariatur animi, perspiciatis
          in cumque!
        </p>
      </div>
      <div className="flex justify-between pt-5 pb-1">
        <ul className="flex space-x-5">
          <li>
            <a href="#faq" className="hover:text-gray-300">
              FAQ
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-gray-300">
              Terms
            </a>
          </li>
          <li>
            <a href="#cookie" className="hover:text-gray-300">
              Cookie Policy
            </a>
          </li>
        </ul>
        <p>© 2025 Heartify, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
