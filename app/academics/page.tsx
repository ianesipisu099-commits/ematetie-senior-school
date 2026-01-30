import Container from "../../components/container";
import { siteConfig } from "../../lib/site-config";

export default function AcademicsPage() {
  const subjects = siteConfig.academics?.subjects ?? [];

  return (
    <Container>
      <div className="py-14">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight">Academics</h1>
          <p className="mt-4 text-gray-600 sm:text-lg">
            Academic programs and subjects offered at {siteConfig.name}. This
            LV1 page provides a preview of the academic structure — detailed
            information will be updated once official content is provided.
          </p>
        </div>

        {/* Curriculum overview */}
        <div className="mt-10 rounded-lg border bg-white p-6 max-w-3xl">
          <h2 className="font-medium">Curriculum</h2>
          <p className="mt-2 text-sm text-gray-600">
            {siteConfig.academics?.curriculum ??
              "8-4-4 curriculum with transition to CBE (Competency-Based Education)."}
          </p>
          <div className="mt-3 rounded-lg border bg-gray-50 px-3 py-2 text-xs text-gray-600">
            Placeholder — detailed curriculum breakdown to be provided by the
            school.
          </div>
        </div>

        {/* Subjects */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Subjects Offered</h2>
          <p className="mt-2 text-gray-600">
            The following subjects are currently offered or planned at{" "}
            {siteConfig.name}.
          </p>

          {subjects.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((subject) => (
                <div
                  key={subject}
                  className="rounded-lg border bg-white p-4 text-sm text-gray-700"
                >
                  {subject}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-lg border bg-gray-50 p-4 text-sm text-gray-600">
              Placeholder — subject list will be published once confirmed by the
              school.
            </div>
          )}
        </div>

        {/* Departments placeholder */}
        <div className="mt-12 max-w-3xl">
          <h2 className="text-xl font-semibold">Departments</h2>
          <p className="mt-2 text-gray-600">
            Academic departments and heads of departments will be listed here.
          </p>

          <div className="mt-4 rounded-lg border bg-gray-50 p-4 text-sm text-gray-600">
            Placeholder — departments, staff listings, and responsibilities to
            be provided.
          </div>
        </div>

        {/* Assessment & performance placeholder */}
        <div className="mt-12 max-w-3xl">
          <h2 className="text-xl font-semibold">Assessment & Performance</h2>
          <p className="mt-2 text-gray-600">
            Information on assessments, examinations, and academic performance
            will be shared on this section.
          </p>

          <div className="mt-4 rounded-lg border bg-gray-50 p-4 text-sm text-gray-600">
            Placeholder — KCSE performance summaries and internal assessment
            structures to be added.
          </div>
        </div>

        {/* LV1 note */}
        <div className="mt-12 rounded-xl border bg-gray-50 p-5 text-sm text-gray-700 max-w-3xl">
          <span className="font-medium">LV1 note:</span> This Academics page shows
          the intended structure of the final website. All placeholder sections
          will be updated with official academic content from the school.
        </div>
      </div>
    </Container>
  );
}

