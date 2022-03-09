export default function ResultsTable({ variables, sets }) {
  return (
    <div className="">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th
                    colSpan={2}
                    scope="col"
                    className="bg-orange-50 py-3.5 px-3 text-sm font-semibold text-gray-900"
                  >
                    You
                  </th>
                  <th
                    colSpan={2}
                    scope="col"
                    className="bg-indigo-50 py-3.5 px-3 text-sm font-semibold text-gray-900"
                  >
                    EU Citizen (average)
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th className="bg-orange-50 py-3.5 px-3 text-right text-sm font-semibold text-gray-900">
                    unscaled
                  </th>
                  <th className="bg-orange-50 py-3.5 px-3 text-right text-sm font-semibold text-gray-900">
                    scaled
                  </th>
                  <th className="bg-indigo-50 py-3.5 px-3 text-right text-sm font-semibold text-gray-900">
                    unscaled
                  </th>
                  <th className="bg-indigo-50 py-3.5 px-3 text-right text-sm font-semibold text-gray-900">
                    scaled
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {variables.map((variable) => (
                  <tr key={variable.key}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                      {variable.label}
                    </td>
                    <td className="whitespace-nowrap bg-orange-50 py-4 px-3 text-right text-sm text-gray-500">
                      {sets.filter((s) => s.key === "user")[0].valuesUnscaled[
                        variable.key
                      ] || 0}
                    </td>
                    <td className="whitespace-nowrap bg-orange-50 py-4 px-3 text-right text-sm text-gray-500">
                      {sets
                        .filter((s) => s.key === "user")[0]
                        .values[variable.key]?.toFixed(1) || 0}
                    </td>
                    <td className="whitespace-nowrap bg-indigo-50 py-4 px-3 text-right text-sm text-gray-500">
                      {
                        sets.filter((s) => s.key === "eu")[0].valuesUnscaled[
                          variable.key
                        ]
                      }
                    </td>
                    <td className="whitespace-nowrap bg-indigo-50 py-4 px-3 text-right text-sm text-gray-500">
                      {sets
                        .filter((s) => s.key === "eu")[0]
                        .values[variable.key]?.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
