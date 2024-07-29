import React from 'react'

function Header() {
  return (
    <div>
      <section>
                <div id="head_top" class="head_top">
                    <div id="header" class="header">
                        <button id="hamburger" class="hamburger">
                            &#9776;
                        </button>
                        <button>Seoul</button>
                        <button>Tokyo</button>
                        <button>New york</button>
                        <button>London</button>
                        <button>button1</button>
                    </div>
                    <div id="sidebar" class="sidebar">
                        <button id="close">X</button>
                        <button>Seoul</button>
                        <button>Tokyo</button>
                        <button>New york</button>
                        <button>button</button>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Header
