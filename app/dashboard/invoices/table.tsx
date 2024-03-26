// ...
export default async function InvoicesTable({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    // const invoices = await fetchFilteredInvoices(query, currentPage);
    return (
        // ...
        <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
          <UpdateInvoice id={invoice.id} />
          <DeleteInvoice id={invoice.id} />
        </td>
        // ...
      );
  }