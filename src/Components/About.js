import React from "react";

export default function About() {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About Us:
            </button>
          </h2>
          <div
            id="panelsStayOpen"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              NewsMatters gathers top news from aound the globe,
              supported by top news agencies who work all over the world and are
              guided by the Trust Principles, which state that we must
              report the news with integrity, independence, and freedom from
              bias.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
