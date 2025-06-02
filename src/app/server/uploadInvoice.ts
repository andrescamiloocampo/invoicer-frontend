export const uploadInvoice = async (body: FormData) => {  
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/invoices/uploadInvoice`,
      {
        method: "POST",        
        body,
      }
    );

    if (!response.ok) return null;

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
