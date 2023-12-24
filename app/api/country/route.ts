export async function GET(request: Request) {
  try {
    const country = request.headers.get("X-Country");
    return Response.json({
      success: true,
      country,
    });
  } catch (error) {
    console.error("Error retrieving IP information:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
